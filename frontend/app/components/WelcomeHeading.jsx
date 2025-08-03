import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";

const WelcomeContainer = styled(Box)({
  backgroundColor: "white",
  borderRadius: "26px",
  border: "1px solid #BEBEBE",
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "700px", 
  marginBottom: "10px",
});



const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});



export default function WelcomeHeading({ user, togglePostSection }) {
  return (
    <WelcomeContainer>
      {/* ✅ Left Section (User Profile Image & Greeting) */}
      <IconContainer>
        {user?.photoURL ? (
          <Avatar src={user.photoURL} alt="User Profile" sx={{ width: 35, height: 35 }} />
        ) : (
          <Image src="/prof.png" alt="Left Icon" width={30} height={30} />
        )}
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: "15px" }}>
          What's on your mind, {user?.displayName || "User"}?
        </Typography>
      </IconContainer>

      {/* ✅ Right Section (Add Post Button) */}
      <button onClick={togglePostSection} style={{ background: "none", border: "none", cursor: "pointer" }}>
        <Image src="/addpost.png" alt="Add Post" width={30} height={30} />
      </button>
    </WelcomeContainer>
  );
}
