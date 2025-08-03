import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation"; // ✅ Import router for navigation
import axios from "axios";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const drawerWidth = 280;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    borderRadius: "26px",
    padding: "15px 20px",
    position: "relative",
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // ✅ Keeps Back button at the bottom
    zIndex: 1000,
    border: "1px solid #BEBEBE",
  },
}));

const ProfileImageContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0",
  
});

const StatsContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
});

const StatColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
});

const MiddleStatColumn = styled(StatColumn)({
  borderLeft: "1px solid #ccc",
  borderRight: "1px solid #ccc",
  padding: "0 10px",
});

const StatNumber = styled(Typography)({
  fontWeight: "bold",
  fontSize: "16px",
});

const StatLabel = styled(Typography)({
  fontSize: "12px",
  color: "black",
});

/* ✅ About Section */
const AboutContainer = styled(Box)({
  width: "100%",
  padding: "15px 0",
});

const AboutTitle = styled(Typography)({
  fontWeight: "bold",
  fontSize: "14px",
  marginBottom: "5px",
});

const AboutText = styled(Typography)({
  fontSize: "12px",
  color: "#555",
  lineHeight: "1.4",
  border: "none",
});




/* ✅ Back Button */
const BackButton = styled(Button)({
  width: "75%",
  margin: "0 auto",
  display: "block",
  backgroundColor: "#019543",
  color: "white",
  borderRadius: "26px",
  padding: "10px",
  fontSize: "14px",
  fontWeight: "500",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#144d1c",
  },
});

const ProfileDrawer = ({ user,postcount,owner,isFollowing, refreshData }) => {
  const router = useRouter(); // ✅ Initialize router
  const [bio,setBio] = React.useState("")
  const [loguser, loading] = useAuthState(auth);

  
  if(loguser?.email === user?.email){
    owner = true;
  }

  const handleBioUpdate = async () => {
    console.log("Updating bio");
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/changebio`, { email: user.email, bio: bio }).then((res) => {
      if (res.data.code === 1) {
        console.log("Bio updated successfully");
      } else {
        console.error("Error updating bio");
      }
    });
  };

  const handleFollow = async () => {
    console.log(`Following ${user.email} by ${loguser.email}`);
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/follow`, { follower: loguser.email, following: user.email }).then((res) => {
      if (res.data.code === 1) {
        console.log("Followed successfully");
        refreshData()
      } else {
        console.error("Error following user");
      }
    });
  };
  const handleUnfollow = async () => {
    console.log(`Unfollowing ${user.email} by ${loguser.email}`);
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/unfollow`, { follower: loguser.email, following: user.email }).then((res) => {
      if (res.data.code === 1) {
        console.log("Unfollowed successfully");
        refreshData()
      } else {
        console.error("Error unfollowing user");
      }
    });
  };


  React.useEffect(()=>{
    setBio(user?.bio);
  },[user])
  console.log("profile",postcount);
  return (
    <Drawer variant="permanent" open>
      {/* ✅ Wrapping main content to prevent layout shift */}
      <Box sx={{ flexGrow: 1 }}>
        {/* ✅ Profile Image Section */}
        <ProfileImageContainer>
          {user?.photoURL ? (
            <Avatar src={user.photoURL} alt="User Profile" sx={{ width: 80, height: 80 }} />
          ) : (
            <Image src="/prof.png" alt="Default Profile" width={100} height={100} />
          )}
        </ProfileImageContainer>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "18px", textAlign: "center" }}>
            {user?.displayName ?? "User"}
          </Typography>
          <Typography variant="small" sx={{ fontSize: "0.7rem", textAlign: "center", color: "#555" }}>
            {user?.email ?? ""}
          </Typography>
        </div>

        
        <StatsContainer>
          <StatColumn>
            <StatNumber>{postcount ?? 20}</StatNumber>
            <StatLabel>Posts</StatLabel>
          </StatColumn>
          <MiddleStatColumn>
            <StatNumber>{user?.followers.length ?? 300}</StatNumber>
            <StatLabel>Followers</StatLabel>
          </MiddleStatColumn>
          <StatColumn>
            <StatNumber>{user?.following.length ?? 221}</StatNumber>
            <StatLabel>Following</StatLabel>
          </StatColumn>
        </StatsContainer>
        {owner?<></>:<div style={{textAlign:"center",marginBottom:"10px",marginTop:"10px"}}>
          {isFollowing?<Button variant="contained" color="primary" onClick={()=>{handleUnfollow()}}>Unfollow</Button>:<Button variant="contained" color="primary" onClick={()=>{handleFollow()}}>Follow</Button>}
        </div>}
        

        <AboutContainer>
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            {owner?<>
              <input type="text" className="form-control" value={bio} onChange={(e)=>{setBio(e.target.value)}}/>
              <br></br>
              <BackButton onClick={handleBioUpdate}>Save</BackButton>
            </>:<>{user?.bio ?? ""}</>}
          </AboutText>
        </AboutContainer>

       
      </Box>
 
      
     <BackButton onClick={() => router.push("/")}>Binge</BackButton>
    </Drawer>
  );
};

export default ProfileDrawer;
