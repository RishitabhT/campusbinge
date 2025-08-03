"use client";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import axios from "axios";
import PostList from "../components/PostList";
import { styled } from "@mui/material/styles";
import SideDrawer from "../components/SideDrawer";
import Dashboard from "../components/Dashboard";
import AdsContainer from "../components/AdsContainer";
import Exploreheading from "../components/Exploreheading";
import Button from "@mui/material/Button"; // Import Button
import { useRouter } from "next/navigation"; // Import Router
import Avatar from "@mui/material/Avatar";
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
  overflow: "hidden",
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
  padding: "40px",
  paddingTop: "20px",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  height: "800px",
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

const BorderedContainer = styled("div")({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#fffff",
  boxSizing: "border-box",
});

const ProfileContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  width: "100%",
  justifyContent: "flex-start",
});

const ProfileImage = styled(Avatar)({
  width: "40px",
  height: "40px",
});

const ProfileName = styled("h4")({
  margin: 0,
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333",
});

export default function Explore() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [postVisible, setPostVisible] = useState(false);
  const [postLoading, setPostLoading] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-overlay", postVisible);
    document.body.classList.toggle("no-scroll", postVisible);
  }, [postVisible]);

  useEffect(() => {
    if (loading || !user) return;
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/post/getall`)
      .then((res) => {
        if (res.data.code !== 1) {
          console.error("Error fetching posts");
        } else {
          res.data.data = res.data.data.reverse();
          setPostLoading(false);
          console.log("post loading stopped")
          setPosts(res.data);
        }
      })
      .catch((err) => console.error("Error:", err));
  }, [loading, user, postLoading]);

  return (
    <>
      <Dashboard title="Explore" />

      <MasterContainer>
        <LeftAlignedColumn>
          <SideDrawer
            customButton={
              <Button
                onClick={() => router.push("/")}
                variant="contained"
                color="primary"
              >
                Back
              </Button>
            }
          />
        </LeftAlignedColumn>

        <MiddleColumn>
          <Exploreheading
            user={user}
            togglePostSection={() => setPostVisible(true)}
          />
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

      {postVisible && (
        <div className="overlay" onClick={() => setPostVisible(false)}></div>
      )}

      {postVisible && (
        <div className="post-container">
          <div className="post-header">
            {/* 🔹 Replaced text with an input field */}
            <input
              type="text"
              placeholder="Search for People"
              className="search-input"
            />

            <img
              src="/cross.png"
              alt="Close"
              className="close-icon"
              onClick={() => setPostVisible(false)}
            />
          </div>

          <div className="divider"></div>

          <BorderedContainer>
            <ProfileContainer>
              <ProfileImage
                src={user?.photoURL || "/prof.png"}
                alt={user?.displayName || "User"}
              />
              <ProfileName>{user?.displayName || "User"}</ProfileName>
            </ProfileContainer>
            <ProfileContainer>
              <ProfileImage
                src={user?.photoURL || "/prof.png"}
                alt={user?.displayName || "User"}
              />
              <ProfileName>{user?.displayName || "User"}</ProfileName>
            </ProfileContainer>
            <ProfileContainer>
              <ProfileImage
                src={user?.photoURL || "/prof.png"}
                alt={user?.displayName || "User"}
              />
              <ProfileName>{user?.displayName || "User"}</ProfileName>
            </ProfileContainer>
            <ProfileContainer>
              <ProfileImage
                src={user?.photoURL || "/prof.png"}
                alt={user?.displayName || "User"}
              />
              <ProfileName>{user?.displayName || "User"}</ProfileName>
            </ProfileContainer>
            <ProfileContainer>
              <ProfileImage
                src={user?.photoURL || "/prof.png"}
                alt={user?.displayName || "User"}
              />
              <ProfileName>{user?.displayName || "User"}</ProfileName>
            </ProfileContainer>
          </BorderedContainer>
        </div>
      )}
    </>
  );
}
