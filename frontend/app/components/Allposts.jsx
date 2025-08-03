import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";

const WelcomeContainer = styled(Box)({
  backgroundColor: "white",
  borderRadius: "26px",
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start", // Align text to the left
  width: "100%",
  maxWidth: "700px",
  marginBottom: "10px",
  border: "1px solid #BEBEBE",
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export default function Allposts({ user }) {
  return (
    <WelcomeContainer>
      <IconContainer>
        {user?.photoURL ? (
          <Avatar src={user.photoURL} alt="User Profile" sx={{ width: 35, height: 35 }} />
        ) : (
          <Image src="/prof.png" alt="Left Icon" width={30} height={30} />
        )}
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: "15px" }}>
          Posts
        </Typography>
      </IconContainer>
    </WelcomeContainer>
  );
}
