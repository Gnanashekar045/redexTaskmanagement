import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { login } from "../redux/authSlice";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false); // Toggle Login/Signup
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user")); // Check if user is logged in
  const isAuthenticated = storedUser !== null;

  // Handle Login and Signup
  const handleAuth = () => {
    const user = { email, password };
    if (isSignup) {
      localStorage.setItem("user", JSON.stringify(user)); // Save user on signup
    }
    dispatch(login(user));
    navigate("/tasks");
  };

  // Handle Signout
  const handleSignout = () => {
    localStorage.removeItem("user"); // Remove user data
    navigate("/"); // Redirect to login page
  };

  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {isAuthenticated ? (
          <>
            <Typography variant="h5">Welcome, {storedUser.email}!</Typography>
            <Button onClick={handleSignout} color="error" sx={{ mt: 2 }}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              {isSignup ? "Signup" : "Login"}
            </Typography>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleAuth} variant="contained" sx={{ mt: 2 }}>
              {isSignup ? "Sign Up" : "Login"}
            </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)}
              sx={{ mt: 2, display: "block" }}
            >
              {isSignup ? "Already have an account? Login" : "New user? Sign up"}
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Auth;
