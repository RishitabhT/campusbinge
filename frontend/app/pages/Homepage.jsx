import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import WelcomeHeading from "../components/WelcomeHeading";
import axios from "axios";
import PostList from "../components/PostList";
import { styled } from "@mui/material/styles";
import SideDrawer from "../components/SideDrawer";
import Dashboard from "../components/Dashboard";
import AdsContainer from "../components/AdsContainer";
import Loader from "../components/Loader";

const MasterContainer = styled("div")({
  display: "flex",
  width: "85%",
  margin: "20px auto",
  gap: "20px",
  paddingBottom: "20px",
  position: "sticky",
  top: 0,
  zIndex: 10,
  height: "78vh",
});

const Column = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const LeftAlignedColumn = styled("div")({
  width: "25%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: "2px",
});

const MiddleColumn = styled("div")({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
});

const RightAlignedColumn = styled("div")({
  width: "25%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

const PostListContainer = styled("div")({
  backgroundColor: "white",
  borderRadius: "26px",
  padding: "40px",
  paddingTop: "20px",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  height: "540px",
  border: "1px solid #BEBEBE",
});

const ScrollablePostList = styled("div")({
  flexGrow: 1,
  overflowY: "auto",
  paddingRight: "5px",
  paddingTop: "8px",
  height: "100%",
  "&::-webkit-scrollbar": { display: "none" },
  scrollbarWidth: "none",
  msOverflowStyle: "none",
});

export default function Homepage() {
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [postVisible, setPostVisible] = useState(false);
  const [postSuccessPopup, setPostSuccessPopup] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(true);

  const profileImage = user?.photoURL && user.photoURL.trim() !== "" ? user.photoURL : "/prof.png";

  useEffect(() => {
    document.body.classList.toggle("dark-overlay", postVisible);
    document.body.classList.toggle("no-scroll", postVisible);
  }, [postVisible]);

  useEffect(() => {
    if (loading || !user) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/getfollowing/${user.email}`)
      .then((res) => {
        if (res.data.code === 0) {
          console.error("Error fetching posts");
          return;
        } else {
          res.data.data = res.data.data.reverse();
          setPostLoading(false);
          setPosts(res.data);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [loading, user]);

  const postContent = async () => {
    if (!content.trim() && images.length === 0) {
      alert("Please enter some text or upload an image.");
      return;
    }

    setUploading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/create`, {
        content: content.trim(),
        img: images.length > 0 ? images[0] : "",
        postedby: user.email,
      });

      if (response.data.code === 1) {
        setContent("");
        setImages([]);
        setPostVisible(false);
        setPostSuccessPopup(true);

        setTimeout(() => {
          setPostSuccessPopup(false);
        }, 2000);
      } else {
        alert(`Failed to create post: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error posting:", error);
      alert("Something went wrong. Check console for details.");
    } finally {
      setUploading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImages((prev) => [...prev, reader.result].slice(0, 5));
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <>
      <Dashboard title="Dashboard" />

      <MasterContainer>
        <LeftAlignedColumn>
          <SideDrawer />
        </LeftAlignedColumn>

        <MiddleColumn>
          <WelcomeHeading user={user} togglePostSection={() => setPostVisible(true)} />

          <PostListContainer>
            <ScrollablePostList>
            {postLoading? (<Loader />): (<PostList posts={posts.data} />)}
            
            </ScrollablePostList>
          </PostListContainer>
        </MiddleColumn>

        <RightAlignedColumn>
          <AdsContainer />
        </RightAlignedColumn>
      </MasterContainer>

      {postVisible && <div className="overlay" onClick={() => setPostVisible(false)}></div>}

      {postVisible && (
        <div className="post-container">
          <div className="post-header">
            <div className="post-user">
              <img src={profileImage} alt="User Profile" className="user-photo" />
              <span className="user-name">{user?.displayName || "User"}</span>
            </div>

            <img src="/cross.png" alt="Close" className="close-icon" onClick={() => setPostVisible(false)} />
          </div>

          <div className="divider"></div>

          <div className="post-content-container">
            <textarea
              className="post-input"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value.slice(0, 250))} // Limit input to 250 characters
            />
           

            {images.length > 0 && (
              <div className="image-preview">
                {images.map((src, index) => (
                  <div className="image-container" key={index}>
                    <img src={src} alt="Preview" className="preview-image" />
                    <img src="/delete.png" alt="Delete" className="delete-icon" onClick={() => removeImage(index)} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="divider"></div>

          <div className="post-upload">
            {images.length < 2 && (
              <>
                <input type="file" id="file-input" accept="image/*" onChange={handleImageUpload} className="hidden-file-input" />
                <label htmlFor="file-input">
                  <img src="/addattachment.png" alt="Add Attachment" className="upload-icon" />
                </label>
              </>
            )}

            <button className="post-button" onClick={postContent} disabled={uploading}>
              {uploading ? "POSTING..." : "POST"}
            </button>
          </div>
        </div>
      )}

      {postSuccessPopup && (
        <div className="success-popup">
          <p>Post Created!</p>
          <button onClick={() => setPostSuccessPopup(false)}>OK</button>
        </div>
      )}
    </>
  );
}
