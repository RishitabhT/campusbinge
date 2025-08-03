"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import LikeSection from "./LikeSection";
import CommentBox from "./CommentBox";

const PostWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "#ffffff",
  padding: "20px",
  gap: "15px",
  marginBottom: "20px",
  width: "100%",
  maxWidth: "600px",
  borderRadius: "10px",
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
  marginBottom: "10px",
});

const ProfileImage = styled(Avatar)({
  width: "45px",
  height: "45px",
  objectFit: "cover",
});

const ProfileName = styled("h5")({
  margin: 0,
  fontSize: "15px",
  fontWeight: "bold",
  color: "#333",
});

const FetchedTextContainer = styled("div")({
  width: "100%",
  backgroundColor: "#f9f9f9",
  padding: "10px",
  borderRadius: "8px",
  wordWrap: "break-word",
});

const PostContent = styled("p")({
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#555",
});

const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "0px",  // Reduced gap
  marginTop: "10px",
  padding: "5px 0",
});


const AdminPost = ({ post }) => {
  return (
    <PostWrapper>
      <LeftSection>
        <ProfileSection>
          <ProfileImage src={post.userPhoto || "/prof.png"} alt={post.username} />
          <ProfileName>{post.username || "Admin"}</ProfileName>
        </ProfileSection>

        <FetchedTextContainer>
          <PostContent>{post.content}</PostContent>
        </FetchedTextContainer>

        {/* Like & Comments in one row with working comment button */}
        <ActionsContainer>
          <LikeSection postid={post.id} /> {/* Fixed prop name */}
          <CommentBox postId={post.id} />
        </ActionsContainer>
      </LeftSection>
    </PostWrapper>
  );
};

export default AdminPost;
