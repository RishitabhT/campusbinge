import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LikeSection({ postid }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [likes, setLikes] = React.useState([]);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [user] = useAuthState(auth);
  const [selfLiked, setSelfLiked] = React.useState(false);

  const toggleLike = () => {
    if (!user) return;

    const url = selfLiked
      ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/unlike`
      : `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/like`;

    axios
      .post(url, { postid, likedby: user.email })
      .then((res) => {
        if (res.data.code === 1) {
          setSelfLiked(!selfLiked);
          loadLikes();
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  const loadLikes = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/getlikes/${postid}`)
      .then((res) => {
        if (res.data.code !== 1) return console.error("Error fetching likes");

        setLikes(res.data.data);
        setPageLoading(false);
        setSelfLiked(res.data.data.some((like) => like.likedby === user?.email));
      })
      .catch((err) => console.error("Error:", err));
  };

  React.useEffect(() => {
    loadLikes();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Like Button */}
      <div onClick={toggleLike} style={{ cursor: "pointer", display: "inline-block" }}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 48 48"
          fill={selfLiked ? "black" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.68 9.21999C40.6585 8.198 39.4456 7.38728 38.1107 6.83416C36.7758 6.28103 35.345 5.99634 33.9 5.99634C32.455 5.99634 31.0242 6.28103 29.6893 6.83416C28.3544 7.38728 27.1415 8.198 26.12 9.21999L24 11.34L21.88 9.21999C19.8166 7.15661 17.0181 5.99741 14.1 5.99741C11.1819 5.99741 8.38338 7.15661 6.31999 9.21999C4.25661 11.2834 3.09741 14.0819 3.09741 17C3.09741 19.9181 4.25661 22.7166 6.31999 24.78L24 42.46L41.68 24.78C42.702 23.7585 43.5127 22.5456 44.0658 21.2107C44.6189 19.8758 44.9036 18.445 44.9036 17C44.9036 15.555 44.6189 14.1242 44.0658 12.7893C43.5127 11.4544 42.702 10.2415 41.68 9.21999Z"
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Like Count (Clickable) */}
      <Typography
        onClick={handleOpen}
        style={{
          marginTop: "5px",
          cursor: "pointer",
          fontSize: "12px",
          
        }}
      >
        {likes.length} {likes.length === 1 ? "Like" : "Likes"}
      </Typography>

      {/* Like Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Likes - {likes.length}
          </Typography>
          <div>
            {likes.map((like) => (
              <Typography key={like.id}>{like.likedby}</Typography>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
