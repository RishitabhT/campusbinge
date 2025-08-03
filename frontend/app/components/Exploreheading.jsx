import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";

const WelcomeContainer = styled(Box)({
  backgroundColor: "white",
  borderRadius: "26px",
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "700px",
  marginBottom: "10px",
  border: "1px solid #BEBEBE",
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexGrow: 1, // Ensures it stretches fully
  
});

const StyledInput = styled("input")({
  flexGrow: 1, 
  
  padding: "6px",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  "::placeholder": { 
    color: "black", // ✅ Change this to any color you want
    opacity: 1, // Ensure full visibility in some browsers
  },
  border: "none", 
  background: "transparent",
});

export default function Exploreheading({ user, togglePostSection }) {
  const [value,setValue] = React.useState("");
  const router = useRouter()
  return (
    <WelcomeContainer>
      {/* ✅ Left Section (User Profile Image & Input) */}
      <IconContainer>
        {/* {user?.photoURL ? (
          <Avatar src={user.photoURL} alt="User Profile" sx={{ width: 35, height: 35 }} />
        ) : (
          <Image src="/prof.png" alt="Left Icon" width={30} height={30} />
        )} */}
        
        {/* ✅ Input field now fully stretches with no border */}
        <StyledInput type="text" placeholder="Search by email address..." value={value} onChange={(e)=>{setValue(e.target.value)}}/>
      </IconContainer>

      {/* ✅ Right Section (Add Post Button) */}
      <button onClick={()=>{router.push(`/users/${value}`)}} style={{ background: "none", border: "none", cursor: "pointer" }}>
        <Image src="/search.png" alt="Add Post" width={26} height={26} />
      </button>
    </WelcomeContainer>
  );
}
