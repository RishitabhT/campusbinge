const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "217.21.94.52",
    user: "u210346953_forum",
    password: "Forum@1234",
    database: "u210346953_forum",
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 10
});

// LOGIN or REGISTER
router.post("/login", (req, res) => {
    const { email, displayName, photoURL } = req.body;
    const query = "SELECT * FROM users WHERE email = ?";

    pool.query(query, [email], (err, result) => {
        if (err) {
            console.error("[LOGIN] Query Error:", err);
            return res.status(400).json({ code: 0, message: "Login failed" });
        }

        if (result.length === 0) {
            const insertQuery = "INSERT INTO users (email, displayName, photoURL) VALUES (?, ?, ?)";
            pool.query(insertQuery, [email, displayName, photoURL], (err) => {
                if (err) {
                    console.error("[LOGIN] Insert Error:", err);
                    return res.status(400).json({ code: 0, message: "User creation failed" });
                }
                return res.status(201).json({ code: 1, message: "User created successfully" });
            });
        } else {
            return res.status(200).json({ code: 1, message: "Login successful", data: result[0] });
        }
    });
});

// FOLLOW
router.post('/follow', (req, res) => {
    const { follower, following } = req.body;
    const query = "INSERT INTO follow (follower, following) VALUES (?, ?)";

    pool.query(query, [follower, following], (err) => {
        if (err) {
            console.error("[FOLLOW] Error:", err);
            return res.status(400).json({ code: 0, message: "Follow failed" });
        }
        return res.status(201).json({ code: 1, message: "Followed successfully" });
    });
});

// UNFOLLOW
router.post('/unfollow', (req, res) => {
    const { follower, following } = req.body;
    const query = "DELETE FROM follow WHERE follower = ? AND following = ?";

    pool.query(query, [follower, following], (err) => {
        if (err) {
            console.error("[UNFOLLOW] Error:", err);
            return res.status(400).json({ code: 0, message: "Unfollow failed" });
        }
        return res.status(201).json({ code: 1, message: "Unfollowed successfully" });
    });
});

// GET USER INFO + FOLLOWING + FOLLOWERS
router.get('/get/:email', (req, res) => {
    const { email } = req.params;
    const userQuery = "SELECT * FROM users WHERE email = ?";

    pool.query(userQuery, [email], (err, result) => {
        if (err || result.length === 0) {
            console.error("[GET USER] Error or Not Found:", err);
            return res.status(404).json({ code: 0, message: "User not found" });
        }

        const user = result[0];
        const followingQuery = "SELECT following FROM follow WHERE follower = ?";
        const followersQuery = "SELECT follower FROM follow WHERE following = ?";

        pool.query(followingQuery, [email], (err, following) => {
            if (err) {
                console.error("[GET FOLLOWING] Error:", err);
                return res.status(400).json({ code: 0, message: "Failed to fetch following" });
            }

            pool.query(followersQuery, [email], (err, followers) => {
                if (err) {
                    console.error("[GET FOLLOWERS] Error:", err);
                    return res.status(400).json({ code: 0, message: "Failed to fetch followers" });
                }

                user.following = following;
                user.followers = followers;
                return res.status(200).json({ code: 1, message: "User fetched successfully", data: user });
            });
        });
    });
});

// CHANGE BIO
router.post('/changebio', (req, res) => {
    const { email, bio } = req.body;
    const query = "UPDATE users SET bio = ? WHERE email = ?";

    pool.query(query, [bio, email], (err) => {
        if (err) {
            console.error("[CHANGE BIO] Error:", err);
            return res.status(400).json({ code: 0, message: "Bio update failed" });
        }
        return res.status(201).json({ code: 1, message: "Bio updated successfully" });
    });
});

module.exports = router;