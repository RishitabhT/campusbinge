import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import axios from "axios";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Avatar from "@mui/material/Avatar";
import { RadioButtonUncheckedSharp } from "@mui/icons-material";

const LikeCommentSection = ({ postId }) => {
  const [user] = useAuthState(auth);

  // 🔹 Like States
  const [likes, setLikes] = useState([]);
  const [selfLiked, setSelfLiked] = useState(false);
  const [likeModalOpen, setLikeModalOpen] = useState(false);

  // 🔹 Comment States
  const [openComments, setOpenComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Dummy Data for Testing
  const dummyComments = [
    { id: "1", commentby: "John Doe", commentcontent: "Nice post!" },
    { id: "2", commentby: "Jane Doe", commentcontent: "Interesting!" },
  ];

  // 🔹 Load Likes
  const loadLikes = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/getlikes/${postId}`)
      .then((res) => {
        if (res.data.code === 1) {
          setLikes(res.data.data);
          setSelfLiked(res.data.data.some((like) => like.likedby === user?.email));
        }
      })
      .catch(() => setLikes([])); // Fallback if API fails
  };

  // 🔹 Toggle Like
  const toggleLike = () => {
    if (!user) return;
    console.log("toggleLike",postId);
    const url = selfLiked
      ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/unlike`
      : `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/like`;

    axios.post(url, { postid: postId, likedby: user.email }).then((res) => {
      if (res.data.code === 1) {
        setSelfLiked(!selfLiked);
        loadLikes();
      }
    });
  };

  // 🔹 Load Comments
  const loadComments = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/getcomments/${postId}`)
      .then((res) => setComments(res.data.code === 1 ? res.data.data : dummyComments))
      .catch(() => setComments(dummyComments));
  };

  // 🔹 Post Comment
  const postComment = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/comment`, {
        postid: postId,
        comment: newComment,
        commentedby: user?.email || "Anonymous",
      })
      .then((res) => {
        if (res.data.code === 1) {
          setNewComment("");
          loadComments();
        }
      })
      .catch(() => console.error("Failed to post comment"));
  };

  useEffect(() => {
    loadLikes();
    loadComments();
  }, []);

  return (
    <Box sx={{ width: "100%", marginTop: "20px" }}>
      {/* 🔹 Like & Comment Buttons Row */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* 🔸 Like Button */}
        <div onClick={toggleLike} style={{ cursor: "pointer" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill={selfLiked ? "black" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.68 9.22C40.66 8.198 39.45 7.387 38.11 6.834C36.78 6.281 35.35 5.996 33.9 5.996C32.46 5.996 31.02 6.281 29.69 6.834C28.35 7.387 27.14 8.198 26.12 9.22L24 11.34L21.88 9.22C19.82 7.157 17.02 5.997 14.1 5.997C11.18 5.997 8.38 7.157 6.32 9.22C4.26 11.28 3.1 14.08 3.1 17C3.1 19.92 4.26 22.72 6.32 24.78L24 42.46L41.68 24.78C42.7 23.76 43.51 22.55 44.07 21.21C44.62 19.88 44.9 18.45 44.9 17C44.9 15.55 44.62 14.12 44.07 12.79C43.51 11.45 42.7 10.24 41.68 9.22Z"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 🔸 Comment Button */}
        <Button
          onClick={() => setOpenComments(!openComments)}
          sx={{ minWidth: "auto", padding: 0 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42 23.0001C42.0069 25.6398 41.3901 28.2438 40.2 30.6001C38.7889 33.4235 36.6195 35.7984 33.9349 37.4586C31.2503 39.1188 28.1565 39.9988 25 40.0001C22.3603 40.0069 19.7562 39.3902 17.4 38.2001L6 42.0001L9.8 30.6001C8.60986 28.2438 7.99312 25.6398 8 23.0001C8.00122 19.8436 8.88122 16.7498 10.5414 14.0652C12.2017 11.3806 14.5765 9.21119 17.4 7.80006C19.7562 6.60992 22.3603 5.99317 25 6.00006H26C30.1687 6.23004 34.1061 7.98958 37.0583 10.9418C40.0105 13.894 41.77 17.8314 42 22.0001V23.0001Z"
              stroke="#1E1E1E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>


        <Button sx={{ minWidth: "auto", padding: 0 }}>
  <svg
    width="20"
    height="20"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.18 27.02L30.84 34.98M30.82 13.02L17.18 20.98M42 10C42 13.3137 39.3137 16 36 16C32.6863 16 30 13.3137 30 10C30 6.68629 32.6863 4 36 4C39.3137 4 42 6.68629 42 10ZM18 24C18 27.3137 15.3137 30 12 30C8.68629 30 6 27.3137 6 24C6 20.6863 8.68629 18 12 18C15.3137 18 18 20.6863 18 24ZM42 38C42 41.3137 39.3137 44 36 44C32.6863 44 30 41.3137 30 38C30 34.6863 32.6863 32 36 32C39.3137 32 42 34.6863 42 38Z"
      stroke="#1E1E1E"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Button>

      </Box>

      {/* 🔹 Likes Text */}
      <Typography
        onClick={() => setLikeModalOpen(true)}
        sx={{
          cursor: "pointer",
          fontSize: "0.65rem",
          marginTop: "5px",
        }}
      >
        {likes.length} {likes.length === 1 ? "Like" : "Likes"}
      </Typography>

      {/* 🔹 Comments Section */}
      {openComments && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
          {/* Profile Section (icon and name) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar sx={{ width: 30, height: 30 }} src={user?.photoURL || "/prof.png"} />
            <input
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{ width: "calc(100% - 80px)", borderRadius: "26px", border: "1px solid #ddd",
                 padding: "10px", backgroundColor: "white", fontSize: "12px",
               }}
            />
            <Button onClick={postComment} sx={{ padding: "0 24px",height: "44px", color:"white",backgroundColor:"#1B6627", 
            fontSize:"12px",borderRadius: "26px", 
                  
            }}>
              Post
            </Button>

          </Box>

          {/* height: px; 
  padding: 0 24px;
  background-color: #1D1B20;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  cursor: pointer;
 margin: 10px; */}








          {/* 🔹 Input and Button in Same Line */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            
          </Box>

          {/* Comment List */}
          {comments.map((comment) => (
  <Box 
    key={comment.id} 
    sx={{ 
      display: "flex", 
      alignItems: "center", 
      gap: "10px", /* Space between Avatar and text */
      padding: "10px", 
      backgroundColor: "white", 
      borderRadius: "16px", 
      border: "1px solid #BEBEBE",
    }}
  >
    {/* Profile Icon */}
    <Avatar sx={{ width: 30, height: 30 }} src="/prof.png" />

    {/* Comment Text */}
    <Box>
      <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "12px" }}>
        {comment.commentby}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: "12px" }}>
        {comment.commentcontent}
      </Typography>
    </Box>
  </Box>
))}

        </Box>
      )}

{/* borderRadius: "5px", border: "1px solid #ddd",
padding: "10px", backgroundColor: "#f5f5f5" */}

      {/* Likes Modal */}
      <Modal open={likeModalOpen} onClose={() => setLikeModalOpen(false)}>
        <Box sx={{ padding: "20px", backgroundColor: "#fff", margin: "auto", top: "30%", position: "absolute", left: "50%", transform: "translate(-50%, -30%)", borderRadius: "26px", width: "300px" }}>
          <Typography variant="h6">Likes</Typography>
          <Box sx={{ marginTop: "10px" }}>
            {likes.map((like, index) => (
              <Typography key={index} variant="body2">{like.likedby}</Typography>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default LikeCommentSection;
