import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

// Drawer Width
const drawerWidth = 280;

// Style the Drawer
const Drawer = styled(MuiDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    borderRadius: "26px",
    padding: "15px 20px",
    backgroundColor: "transparent",
    position: "relative",
    height: "75vh", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center", 
    zIndex: 1000,
    display: "none",
  },
}));

const AdsContainer = () => {
  return (
    <Drawer variant="permanent" open>
      <div style={{ textAlign: "center", fontSize: "20px",  }}>
       
      </div>
    </Drawer>
  );
};

export default AdsContainer;
