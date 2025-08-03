import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@mui/material/Button"; // Import MUI Button

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";


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
    justifyContent: "space-between",
    zIndex: 1000,
    border: "1px solid #BEBEBE",
    fontSize: "16px",
  },
}));

const LogoutButton = styled(Button)({
  width: "75%", // Makes button centered
  margin: "0 auto", // Centers horizontally
  display: "block",
  backgroundColor: "#019543",
  color: "white",
  borderRadius: "26px",
  padding: "10px",
  fontSize: "14px",
  fontWeight: "900",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#144d1c",
  },
});

const SideDrawer = ({  }) => {
  const router = useRouter();
   const handleLogout = () => {
    signOut(auth);
    // sessionStorage.removeItem("user");
    console.log("Logout clicked");
    router.push("/sign-in"); // Redirect to login page
  }
  return (
    <Drawer variant="permanent" open>
      <List sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {[
          { text: "Binge", icon: "/binge.png", link: "/" },
          { text: "Profile", icon: "/profile.png", link: "/profile" },
          { text: "Explore", icon: "/explore.png", link: "/explore" },
          { text: "Help and Support", icon: "/support.png", link: "/support" },
          { text: "Feedback", icon: "/feedback.png", link: "/support" },
        ].map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              fontWeight: "900",
              borderRadius: "8px",
              marginBottom: "10px",
              transition: "background-color 0.3s ease",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
            }}
            onClick={() => router.push(item.link)}
          >
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 48, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src={item.icon} alt={item.text} width={20} height={20} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* BETA Notice */}
      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#666",
          padding: "10px",
          backgroundColor: "#f8f8f8",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      >
        <strong>Note:</strong> This product is in its <strong>BETA</strong> testing phase. We appreciate your feedback on how we can improve the platform.
      </div>

      {/* Logout Button */}
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Drawer>
  );
};

export default SideDrawer;
