"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Link,
  Card,
  Grid2,
  CardMedia,
  Snackbar,
  Alert,
} from "@mui/material";
import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../firebase";
// import Image from "next/image";
// import login from "../../../public/Login Art.jpg";
import { useDispatch, useSelector } from "react-redux";
import { startUpdate, updateFailure, updateSuccess } from "@/store/UserInfo/updateActions";


const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, message } = useSelector((state: any) => state.update); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(startUpdate()); 

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(updateSuccess("Login successful!"));
      setOpenSnackbar(true);
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/");
    } catch (error) {
      dispatch(updateFailure("Login failed. Please try again."));
      setOpenSnackbar(true); 
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    // try {
    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     username,
    //     password
    //   );
    //   const user = userCredential.user;
    //   if (user) {
    //     router.push("/");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


  useEffect(() => {
    if (status === "succeeded" || status === "failed") {
      setOpenSnackbar(true);
    }
  }, [status]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        height: {
          xs: "auto",
          md: "100vh",
        },
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
      }}
    >
      <Card
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: {
            xs: "wrap-reverse",
            md: "nowrap",
          },
          width: {
            xs: "100%",
            md: "60%",
          },
        }}
      >
        <Box
          p={4}
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
          <Typography variant="h5" align="center" sx={{ fontWeight: 600 }}>
            Welcom back!
          </Typography>
          <Typography variant="body2" align="center" sx={{ color: "#162D3A" }}>
            Sign in to your account
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={username}
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                padding: 0,
                "& .MuiInputBase-root": { height: "46px", color: "red" },
                "& .MuiInputBase-input": {
                  height: 10,
                  color: "#162D3A",
                },
              }}
            />
            <Box>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                margin="normal"
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  padding: 0,
                  "& .MuiInputBase-root": { height: "46px" },
                  "& .MuiInputBase-input": {
                    height: 10,
                    color: "#162D3A",
                  },
                }}
              />
              <Box sx={{ textAlign: "end", marginTop: 0.5 }}>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => alert("Redirecting to Forgot Password page")}
                >
                  Forgot Password?
                </Link>
              </Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: 2,
                background: "#162D3A",
                textTransform: "capitalize",
                fontWeight: 600,
                fontSize: 16,
                boxShadow: "none",
              }}
            >
              Login
            </Button>
          </form>
          <Box sx={{ textAlign: "center", marginTop: 1, fontSize: 14 }}>
            Dont you have an account?
            <Link
              href="/signup"
              variant="body2"
              onClick={() => alert("Redirecting to sign up page")}
              sx={{ fontSize: 14 }}
            >
              Sign up
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            height: {
              xs: "400px",
              md: "700px",
            },
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
        >
      {/* <CardMedia
        component="img"
        height="100%"
        image={login.src}
        alt="login"
        sx={{objectFit: "cover"}}
      /> */}
        </Box>
      </Card>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={status === "succeeded" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default LoginForm;