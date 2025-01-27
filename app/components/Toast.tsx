"use client";

import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Toast = () => {
  const { status, message } = useSelector((state: any) => state.update);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (status === "succeeded" || status === "failed") {
      setOpenSnackbar(true);
    }
  }, [status]);

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={status === "succeeded" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
