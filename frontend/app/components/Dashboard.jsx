import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AppBar = styled(MuiAppBar)(() => ({
  backgroundColor: "white",
  color: "black",
  borderRadius: "26px",
  width: "85%", 
  margin: "20px auto", 
  padding: "10px 20px",
  boxShadow: "none", 
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 999,
  border: "1px solid #BEBEBE",
}));

export default function Dashboard({ title = "Dashboard", children }) {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", overflowX: "hidden" }}>
      {/* Navbar */}
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
          
          {/* Fixed-size box to prevent expansion */}
          <Box sx={{ width: "100px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Image
              src="/campus.png"
              alt="Left Icon"
              width={120}
              height={120}
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "25px", flexShrink: 0 }}>
            {["HOME", "ABOUT", "HOUSING", "MERCH", "EVENTS", "COMMUNITY"].map((item) => (
              <Typography
                key={item}
                variant="h6"
                sx={{
                  color: "#000741",
                  cursor: "pointer",
                  fontSize: { xs: "12px", sm: "16px", md: "16px" },
                  fontWeight: 900,
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

          <Image
            src="/righticon.png"
            alt="Right Icon"
            width={21}
            height={21}
            style={{ objectFit: "contain" }}
          />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box component="main" sx={{ mt: "120px", "@media (max-width: 600px)": { mt: "70px" } }}>
        {children}
      </Box>
    </Box>
  );
}
