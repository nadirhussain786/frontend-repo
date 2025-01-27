"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  makeStyles,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  startUpdate,
  updateSuccess,
  updateFailure,
} from "@/store/UserInfo/updateActions";

const EditProfilePopup = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector((state: any) => state.update);

  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);
  const [bio, setBio] = useState("Software Developer at XYZ Company");

  // Open/Close Dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Submit Form
  const handleSave = async () => {
    dispatch(startUpdate());

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      dispatch(updateSuccess("Profile updated successfully!"));
      setOpenSnackbar(true);
      handleClose();
    } catch (error) {
      dispatch(updateFailure("Update failed. Please try again."));
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* Open Popup Button */}
      <Button
        variant="contained"
        sx={{
          background: "#162D3A",
          textTransform: "capitalize",
          fontWeight: 600,
          fontSize: 16,
        }}
        onClick={handleOpen}
      >
        Edit Profile
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: 600, textAlign: "center" }}>
          Edit Profile
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              padding: 0,
              "& .MuiInputBase-root": { height: "46px", color: "red" },
              "& .MuiInputBase-input": {
                height: 10,
                color: "#162D3A",
              },
            }}
          />
          <TextField
            label="Age"
            fullWidth
            variant="outlined"
            margin="normal"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            sx={{
              "& input[type=number]": {
                MozAppearance: "textfield", // Firefox
                WebkitAppearance: "none", // Chrome, Safari, Edge
                appearance: "textfield", // General
              },
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              padding: 0,
              "& .MuiInputBase-root": { height: "46px", color: "red" },
              "& .MuiInputBase-input": {
                height: 10,
                color: "#162D3A",
              },
            }}
          />
          <TextField
            label="Bio"
            fullWidth
            variant="outlined"
            margin="normal"
            multiline
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </DialogContent>
        <DialogActions
          sx={{
            padding: "0px 24px 20px",
          }}
        >
          <Button onClick={handleClose} sx={{ color: "#162D3A" }}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              background: "#162D3A",
              fontWeight: 600,
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EditProfilePopup;
