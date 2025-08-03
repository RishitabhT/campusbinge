const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// MySQL connection pool
const pool = mysql.createPool({
    host: "217.21.94.52",
    user: "u210346953_forum",
    password: "Forum@1234",
    database: "u210346953_forum",
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 10
}).promise();

// Create a new post
router.post("/create", async (req, res) => {
    try {
        const { content, img, postedby } = req.body;
        if (!content || !postedby) {
            return res.status(400).json({ code: 0, message: "Missing required fields" });
        }

        const timestamp = new Date();
        const query = `INSERT INTO posts (content, img, times, postedby) VALUES (?, ?, ?, ?)`;
        await pool.query(query, [content, img || null, timestamp, postedby]);

        res.status(201).json({ code: 1, message: "Post created successfully" });
    } catch (err) {
        console.error("Error from /create:", err.message);
        res.status(500).json({ code: 0, message: "Post creation failed" });
    }
});

// Get all posts by a user
router.get('/get/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const query = `
            SELECT posts.id AS postid, content, img, times, postedby,
                   users.id AS userID, displayName, photoURL
            FROM posts
            JOIN users ON posts.postedby = users.email
            WHERE postedby = ?
        `;
        const [result] = await pool.query(query, [email]);
        res.status(200).json({ code: 1, message: "Posts fetched successfully", data: result });
    } catch (err) {
        console.error("Error from /get/:email:", err.message);
        res.status(500).json({ code: 0, message: "Post fetching failed" });
    }
});

// Get following users' posts
router.get('/getfollowing/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const query = `
            SELECT posts.id AS postid, content, img, times, postedby,
                   users.id AS userID, displayName, photoURL
            FROM posts
            JOIN users ON posts.postedby = users.email
            JOIN follow ON follow.following = posts.postedby
            WHERE follow.follower = ?
        `;
        const [result] = await pool.query(query, [email]);
        res.status(200).json({ code: 1, message: "Posts fetched successfully", data: result });
    } catch (err) {
        console.error("Error from /getfollowing/:email:", err.message);
        res.status(500).json({ code: 0, message: "Post fetching failed" });
    }
});

// Get all posts
router.get('/getall', async (req, res) => {
    try {
        const query = `
            SELECT posts.id AS postid, content, img, times, postedby,
                   users.id AS userID, displayName, photoURL
            FROM posts
            JOIN users ON posts.postedby = users.email
        `;
        const [result] = await pool.query(query);
        res.status(200).json({ code: 1, message: "Posts fetched successfully", data: result });
    } catch (err) {
        console.error("Error from /getall:", err.message);
        res.status(500).json({ code: 0, message: "Post fetching failed" });
    }
});

// Delete a post
router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM posts WHERE id = ?`;
        await pool.query(query, [id]);
        res.status(200).json({ code: 1, message: "Post deleted successfully" });
    } catch (err) {
        console.error("Error from /delete/:id:", err.message);
        res.status(500).json({ code: 0, message: "Post deletion failed" });
    }
});

// Add a comment
router.post('/comment', async (req, res) => {
    try {
        const { comment, postid, commentedby } = req.body;
        if (!comment || !postid || !commentedby) {
            return res.status(400).json({ code: 0, message: "Missing required fields" });
        }
        const query = `INSERT INTO comment (commentcontent, postid, commentby) VALUES (?, ?, ?)`;
        await pool.query(query, [comment, postid, commentedby]);
        res.status(201).json({ code: 1, message: "Comment created successfully" });
    } catch (err) {
        console.error("Error from /comment:", err.message);
        res.status(500).json({ code: 0, message: "Comment creation failed" });
    }
});

// Like a post
router.post('/like', async (req, res) => {
    try {
        const { postid, likedby } = req.body;
        const query = `INSERT INTO likes (postid, likedby) VALUES (?, ?)`;
        await pool.query(query, [postid, likedby]);
        res.status(201).json({ code: 1, message: "Like added successfully" });
    } catch (err) {
        console.error("Error from /like:", err.message);
        res.status(500).json({ code: 0, message: "Like creation failed" });
    }
});

// Unlike a post
router.post('/unlike', async (req, res) => {
    try {
        const { postid, likedby } = req.body;
        const query = `DELETE FROM likes WHERE postid = ? AND likedby = ?`;
        await pool.query(query, [postid, likedby]);
        res.status(200).json({ code: 1, message: "Like removed successfully" });
    } catch (err) {
        console.error("Error from /unlike:", err.message);
        res.status(500).json({ code: 0, message: "Unlike failed" });
    }
});

// Get likes for a post
router.get('/getlikes/:postid', async (req, res) => {
    try {
        const { postid } = req.params;
        const query = `SELECT * FROM likes WHERE postid = ?`;
        const [result] = await pool.query(query, [postid]);
        res.status(200).json({ code: 1, message: "Likes fetched successfully", data: result });
    } catch (err) {
        console.error("Error from /getlikes/:postid:", err.message);
        res.status(500).json({ code: 0, message: "Like fetching failed" });
    }
});

// Get comments for a post
router.get('/getcomments/:postid', async (req, res) => {
    try {
        const { postid } = req.params;
        const query = `SELECT * FROM comment WHERE postid = ?`;
        const [result] = await pool.query(query, [postid]);
        res.status(200).json({ code: 1, message: "Comments fetched successfully", data: result });
    } catch (err) {
        console.error("Error from /getcomments/:postid:", err.message);
        res.status(500).json({ code: 0, message: "Comment fetching failed" });
    }
});

module.exports = router;