import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LogoutOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/config";
import Image from "next/image";

const drawerWidth = 280;

/* ✅ Sticky Navbar */
const AppBar = styled(MuiAppBar)({
  backgroundColor: "white",
  color: "black",
  borderRadius: "16px",
  width: "95%",
  margin: "20px auto",
  padding: "10px 20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  position: "fixed", // ✅ Fixed at the top
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1100, // Ensure it stays above everything
});

/* ✅ Sticky SideDrawer */
const Drawer = styled(MuiDrawer)({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    borderRadius: "16px",
    marginLeft: "20px",
    padding: "15px 20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: "99px", // ✅ Adjusted to start below the navbar
    left: "20px",
    height: "calc(100vh - 170px)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1000, // Below navbar but above content
  },
});

/* ✅ Page Content Wrapper */
const ContentWrapper = styled(Box)({
  flexGrow: 1,
  marginLeft: "320px", // ✅ Adjusted to leave space for SideDrawer
  paddingTop: "125px", // ✅ Prevents content from hiding behind Navbar
  width: "100%",
});

export default function DashboardLayout({ title = "Dashboard", children }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      sessionStorage.removeItem("user");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100vw", overflowX: "hidden" }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Image src="/campus.png" alt="Left Icon" width={200} height={80} className="navbar-icon" />

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "25px" }}>
            {["Home", "About", "Housing", "Merch", "Events", "Community"].map((item) => (
              <Typography
                key={item}
                variant="h6"
                sx={{
                  color: "black",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: "#555" },
                }}
                onClick={() => router.push(`/${item.toLowerCase()}`)}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Image src="/righticon.png" alt="Right Icon" width={20} height={20} className="navbar-right-icon" />
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open>
        <List sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {[
            { text: "Binge", icon: "/binge.png", link: "/" },
            { text: "Profile", icon: "/profile.png", link: "/profile" },
            { text: "Explore", icon: "/explore.png", link: "/explore" },
            { text: "Settings", icon: "/settings.png", link: "/settings" },
            { text: "Help and Support", icon: "/support.png", link: "/support" },
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                borderRadius: "8px",
                marginBottom: "10px",
                transition: "background-color 0.3s ease",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
              }}
              onClick={() => router.push(item.link)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: 48, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Image src={item.icon} alt={item.text} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* ✅ Fixed Sidebar Logout Icon */}
        <ListItem
          disablePadding
          sx={{
            borderRadius: "8px",
            marginBottom: "15px",
            transition: "background-color 0.3s ease",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
          }}
          onClick={handleLogout}
        >
          <ListItemButton sx={{ display: "flex", alignItems: "center" }}>
            {/* ✅ Logout Icon (Positioned correctly) */}
            <ListItemIcon sx={{ color: "black", minWidth: "unset", marginLeft: "auto" }}>
              <LogoutOutlined />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Drawer>

      {/* ✅ Main Content Wrapper */}
      <ContentWrapper component="main">
        {children}
      </ContentWrapper>
    </Box>
  );
}
