"use client";
import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        zIndex: 9999,
      }}
    >
      <CircularProgress 
        sx={{ color: "#162D3A" }} 
        size={120}
        thickness={3}
      />
    </Box>
  );
};

export default Loader;

