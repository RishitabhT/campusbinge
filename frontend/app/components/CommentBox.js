import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const CommentBox = ({ postId }) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user] = useAuthState(auth);

  const dummyComments = [
    { id: "dummy1", commentby: "John Doe", commentcontent: "This is a dummy comment." },
    { id: "dummy2", commentby: "Jane Doe", commentcontent: "Another dummy comment for testing." },
    { id: "dummy3", commentby: "Random User", commentcontent: "Backend might be down!" },
  ];

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
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const loadComments = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/getcomments/${postId}`)
      .then((res) => {
        setComments(res.data.code !== 0 ? res.data.data : dummyComments);
      })
      .catch((err) => {
        console.error("Error:", err);
        setComments(dummyComments);
      });
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Comment Button */}
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          minWidth: "auto",
          padding: 0,
        }}
      >
        <svg
          width="25"
          height="25"
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

      {/* Comment Dropdown (Expands Post) */}
      {open && (
        <Box
          sx={{
            width: "100%", // ✅ Makes sure it stretches fully inside post container
            backgroundColor: "#f9f9f9",
            padding: "12px",
            borderRadius: "8px",
            marginTop: "20px", // ✅ Adds extra spacing so it appears lower
           
            transform: "translateY(5px)", // ✅ Moves it slightly lower
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out", // ✅ Smooth opening effect
            opacity: open ? 1 : 0,
          }}
        >
          <Typography variant="h6">Comments</Typography>

          {/* Comment Input */}
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Add a Comment"
              className="form-control"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                boxSizing: "border-box",
              }}
            />
            <Button onClick={postComment} sx={{ marginTop: "5px" }}>
              Post Comment
            </Button>
          </div>

          {/* Display Comments */}
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                padding: "8px",
                borderRadius: "5px",
                backgroundColor: "#e9e9e9",
                marginBottom: "5px",
              }}
            >
              <small>{comment.commentby}</small>
              <Typography variant="body2">{comment.commentcontent}</Typography>
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CommentBox;
