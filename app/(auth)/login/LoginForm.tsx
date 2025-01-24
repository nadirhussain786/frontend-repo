"use client";

import React, { SyntheticEvent, useState } from "react";
import { TextField, Button, Box, Typography, Paper, Link } from "@mui/material";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    router.push("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          padding: { xs: 2, sm: 3 },
          width: { xs: "90%", sm: 400 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" align="center">
          Login
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2"
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            margin="normal"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
        <Box sx={{ textAlign: "center", marginTop: 1 }}>
          <Link
            href="#"
            variant="body2"
            onClick={() => alert("Redirecting to Forgot Password page")}
          >
            Forgot Password?
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
