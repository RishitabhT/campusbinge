"use client";
import React from "react";
import { styled, keyframes } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import LikeCommentSection from "./LikeCommentSection";
import Link from "next/link";

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
  }
`;

const PostWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "#f7f7f7",
  padding: "25px",
  gap: "15px",
  marginBottom: "20px",
  width: "100%",
  maxWidth: "500px",
  borderRadius: "26px",
  overflow: "hidden",
  marginLeft: "auto",
  marginRight: "auto",
  boxSizing: "border-box",
});

const LeftSection = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const ProfileSection = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "15px",
});

const ProfileImage = styled(Avatar)({
  width: "40px",
  height: "40px",
  objectFit: "cover",
});

const ProfileName = styled("h5")({
  margin: 0,
  fontSize: "14px",
  fontWeight: "500",
  color: "#000741",
});

const ContentWrapper = styled("div")({
  width: "100%",
  backgroundColor: "transparent",
  padding: "-10px",
  borderRadius: "8px",
  wordWrap: "break-word",
  display: "flex",
  flexDirection: "column",
});

const FetchedTextContainer = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const StaticText = styled("p")({
  fontSize: "12px",
  lineHeight: "1.6",
  color: "#000741",
  margin: 0,
  fontWeight: "500",
});

const ImageContainer = styled("div")({
  width: "120%",
  height: "350px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0px",
  overflow: "hidden",
  backgroundColor: "black",
  alignSelf: "center",
  marginTop: "22px",
});

const PostImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const dummyPosts = [
  {
    id: "dummy1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    img: "/fri.jpg",
  },
  {
    id: "dummy2",
    content:
      "Another dummy post. Backend might be down! This one also has long text to ensure the feature works correctly when multiple posts exist.",
    img: "",
  },
];

const PostList = ({ posts }) => {
  const [user] = useAuthState(auth);
  const displayedPosts = posts && posts.length > 0 ? posts : [];

  
    return (
      <div key={`post${Math.random()}`}>
        {displayedPosts.map((post, index) => {
          if (!post.content?.trim() && !post.img) return null;
          return (
            <PostItem key={post.id} post={post} user={user} index={index} />
          );
        })}
      </div>
    );
  
};

const PostItem = ({ post, user, index }) => {
  console.log("PostItem", post);
  return (
    <PostWrapper style={{ marginTop: index === 0 ? "10px" : "0px" }}>
      <LeftSection>
        <ProfileSection>
          <Link
            href={`/users/${post?.postedby}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProfileImage
              src={post?.photoURL || "/prof.png"}
              alt={post?.displayName || "User"}
            />
          </Link>
          <ProfileName>
            <Link
              href={`/users/${post?.postedby}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {post?.displayName || "User"}{" "}
            </Link>
          </ProfileName>
        </ProfileSection>

        <ContentWrapper>
          <FetchedTextContainer>
            <StaticText>{post.content}</StaticText>
          </FetchedTextContainer>

          {post.img && (
            <ImageContainer>
              <PostImage src={post.img} alt="Post Image" />
            </ImageContainer>
          )}
        </ContentWrapper>

        <LikeCommentSection
          postId={post.postid}
          style={{ marginLeft: "50px" }}
        />
      </LeftSection>
    </PostWrapper>
  );
};

export default PostList;
