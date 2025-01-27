"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
// import { auth } from "../../firebase";
// import { signOut } from "firebase/auth";

export function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // signOut(auth).then(() => {
    //   document.cookie = "idToken=";
    //   router.push("/login");
    // });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#162D3A",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-start" }}>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              textTransform: "inherit",
              fontWeight: 600,
              fontSize: 16,
              backgroundColor: "#162D3A",
              "&:hover": {
                backgroundColor: "#0F1E28",
              },
            }}
          >
            Logout
          </Button>
          <Button
            color="inherit"
            sx={{
              textTransform: "inherit",
              fontWeight: 600,
              fontSize: 16,
              backgroundColor: "#162D3A", // Match the background color
              "&:hover": {
                backgroundColor: "#0F1E28", // Darken on hover
              },
            }}
          >
            Edit Info
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
