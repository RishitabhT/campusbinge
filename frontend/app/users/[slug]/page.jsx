"use client";
import React from 'react';
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import Allposts from "../../components/Allposts";
import axios from "axios";
import PostList from "../../components/PostList";
import { styled } from "@mui/material/styles";
import ProfileDrawer from "../../components/ProfileDrawer";
import Dashboard from "../../components/Dashboard";
import AdsContainer from "../../components/AdsContainer";
import { Flag } from '@mui/icons-material';

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
  overflow: "hidden",
});

const Column = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const LeftAlignedColumn = styled("div")({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: "2px",
});

const MiddleColumn = styled("div")({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
});

const RightAlignedColumn = styled("div")({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

const PostListContainer = styled("div")({
  backgroundColor: "white",
  borderRadius: "26px",
  padding: "30px",
  paddingTop: "10px",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  height: "800px",
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

export default function Profile({ params }) {
  const [isfollowingCheck, setIsFollowingCheck] = useState(0);
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [postVisible, setPostVisible] = useState(false);
  const [postSuccessPopup, setPostSuccessPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({email:"",displayName:"",photoURL:"",followers:[],following:[]});
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState({ data: [] });
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  
  const profileImage =
    user?.photoURL && user.photoURL.trim() !== "" ? user.photoURL : "/prof.png";

  useEffect(() => {
    document.body.classList.toggle("dark-overlay", postVisible);
    document.body.classList.toggle("no-scroll", postVisible);
    
  }, [postVisible]);

  // useEffect(() => {
  //   console.log("Updated isFollowingCheck:", isfollowingCheck);
  // }, [isfollowingCheck]);
  
  const getUserDetails = async () => {
    if (loading || !user) return;
    else{
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/get/${slug}`)
        .then((res) => {
          if (res.data.code === 0) {
            console.error("Error fetching user details");
            return;
          } else {
            var flag = 0
            setCurrentUser(res.data.data);
            for (let i = 0; i < res.data.data.followers.length; i++) {
              console.log("see",res.data.data.followers[i].follower == user.email);
              if (res.data.data.followers[i].follower == user.email) {
                flag = 1
                console.log("abcdef")
                setIsFollowingCheck(1);
                break;
              }
            }
            console.log("flag",flag);
            console.log("isfollwing",isfollowingCheck);
          }
        }).catch((err) => {
          console.error("Error:", err);
        }
      );
    }
  };

  useEffect(() => {
    if (loading || !user) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/get/${slug}`)
      .then((res) => {
        if (res.data.code === 0) {
          console.error("Error fetching posts");
          return;
        } else {
          res.data.data = res.data.data.reverse();
          getUserDetails();
          setPosts(res.data);
          console.log("slug - ",res.data.data.length);
          axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/get/${slug}`)
            .then((res) => {
              if (res.data.code === 0) {
                console.error("Error fetching user details");
                return;
              } else {
                setCurrentUser(res.data.data);
              }
            }).catch((err) => {
              console.error("Error:", err);
            }
          );
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });

  }, [loading, user, isfollowingCheck]);

  const postContent = async () => {
    if (!content.trim() && images.length === 0) {
      alert("Please enter some text or upload an image.");
      return;
    }

    setUploading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/create`,
        {
          content: content.trim(),
          img: images.length > 0 ? images[0] : "",
          postedby: user.email,
        }
      );

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
      <Dashboard title="Profile" />

      <MasterContainer>
        <LeftAlignedColumn>
          <ProfileDrawer refreshData={getUserDetails} user={currentUser} postcount={posts.data.length ?? 0} isFollowing = {isfollowingCheck}/>
        </LeftAlignedColumn>

        <MiddleColumn>
          <Allposts
            user={currentUser}
            togglePostSection={() => setPostVisible(true)}
          />

          <PostListContainer>
            <ScrollablePostList>
              <PostList posts={posts.data} />
            </ScrollablePostList>
          </PostListContainer>
        </MiddleColumn>

        <RightAlignedColumn>
          <AdsContainer />
        </RightAlignedColumn>
      </MasterContainer>

      {postVisible && (
        <div className="overlay" onClick={() => setPostVisible(false)}></div>
      )}

      {postVisible && (
        <div className="post-container">
          <div className="post-header">
            <div className="post-user">
              <img
                src={profileImage}
                alt="User Profile"
                className="user-photo"
              />
              <span className="user-name">{user?.displayName || "User"}</span>
            </div>

            <img
              src="/cross.png"
              alt="Close"
              className="close-icon"
              onClick={() => setPostVisible(false)}
            />
          </div>

          {/* Divider ABOVE post-content-container */}
          <div className="divider"></div>

          <div className="post-content-container">
            <textarea
              className="post-input"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {images.length > 0 && (
              <div className="image-preview">
                {images.map((src, index) => (
                  <div className="image-container" key={index}>
                    <img src={src} alt="Preview" className="preview-image" />
                    <img
                      src="/delete.png"
                      alt="Delete"
                      className="delete-icon"
                      onClick={() => removeImage(index)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Divider BELOW post-content-container */}
          <div className="divider"></div>

          <div className="post-upload">
            {images.length < 2 && (
              <>
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden-file-input"
                />
                <label htmlFor="file-input">
                  <img
                    src="/addattachment.png"
                    alt="Add Attachment"
                    className="upload-icon"
                  />
                </label>
              </>
            )}

            <button
              className="post-button"
              onClick={postContent}
              disabled={uploading}
            >
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
