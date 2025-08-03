import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import WelcomeHeading from "../components/WelcomeHeading";
import axios from "axios";
import PostList from "../components/PostList";
import { styled } from "@mui/material/styles";
import SideDrawer from "../components/SideDrawer";  
import Dashboard from "../components/Dashboard";

const MasterContainer = styled("div")({
  display: "flex",
  width: "95%",
  margin: "20px auto", // Centering the Master container
  gap: "20px",
  paddingBottom: "20px", // Some space below
 
  position: "sticky", // Make it sticky
  top: 0, // Ensure it sticks to the top of the viewport
  zIndex: 10, // Keep container below any sticky navbar or other fixed elements
  height: "78vh", // Fixed height for the container (adjust based on design)
  overflow: "hidden", // Prevent overflow on the main container
});

const Column = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Centering content in columns
});

const PostListContainer = styled("div")({
  backgroundColor: "white",
  borderRadius: "16px",
  padding: "0px",
  width: "100%",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  height: "100%", // Ensures the post container takes up available height
});

const ScrollablePostList = styled("div")({
  flexGrow: 1,
  overflowY: "auto", // Makes this div scrollable
  paddingRight: "5px",
  paddingTop: "10px",
  "&::-webkit-scrollbar": { display: "none" }, // Hides the scrollbar
  scrollbarWidth: "none",
  msOverflowStyle: "none",
});

export default function Homepage() {
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [postVisible, setPostVisible] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);

  const profileImage = user?.photoURL && user.photoURL.trim() !== "" ? user.photoURL : "/prof.png";

  useEffect(() => {
    document.body.classList.toggle("dark-overlay", postVisible);
    document.body.classList.toggle("no-scroll", postVisible);
  }, [postVisible]);

  useEffect(() => {
    if (loading || !user) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/get/${user.email}`)
      .then((res) => {
        if (res.data.code === 0) {
          console.error("Error fetching posts");
          return;
        } else {
          res.data.data = res.data.data.reverse();
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

      console.log("Post response:", response.data);

      if (response.data.code === 1) {
        alert("Post created successfully!");
        setContent("");
        setImages([]);
        setPostVisible(false);
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
      <Dashboard title="Dashboard" /> {/* Rendering the Dashboard at the top */}

      <MasterContainer>
        {/* First Column with SideDrawer */}
        <Column>
          <SideDrawer />
        </Column>

        {/* Second Column with PostList */}
        <Column>
          <WelcomeHeading user={user} togglePostSection={() => setPostVisible(true)} />

          <PostListContainer>
            <ScrollablePostList>
              <PostList posts={posts.data} />
            </ScrollablePostList>
          </PostListContainer>
        </Column>

        {/* Third Column with AdsContainer */}
        <Column>
          {/* <AdsContainer /> */}
        </Column>
      </MasterContainer>

      {postVisible && <div className="overlay" onClick={() => setPostVisible(false)}></div>}

      {postVisible && (
        <div className="post-container">
          <div className="post-header">
            <h4 className="post-title">Create Post</h4>
            <img src="/cross.png" alt="Close" className="close-icon" onClick={() => setPostVisible(false)} />
          </div>

          <div className="post-content-container">
            <div className="post-user">
              <img src={profileImage} alt="User Profile" className="user-photo" />
              <span className="user-name">{user?.displayName || "User"}</span>
            </div>

            <textarea className="post-input" placeholder="What's on your mind?" value={content} onChange={(e) => setContent(e.target.value)} />

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

          <div className="post-upload">
            {images.length < 5 && (
              <>
                <input type="file" id="file-input" accept="image/*" onChange={handleImageUpload} className="hidden-file-input" />
                <label htmlFor="file-input">
                  <img src="/addattachment.png" alt="Add Attachment" className="upload-icon" />
                </label>
              </>
            )}

            <button className="post-button" onClick={postContent} disabled={uploading}>
              {uploading ? "Posting..." : "Post"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
