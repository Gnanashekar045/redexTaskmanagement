import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { login } from "../redux/authSlice";
import TaskList from "./TaskList";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = storedUser !== null;

  const handleAuth = () => {
    const user = { email, password };
    if (isSignup) {
      localStorage.setItem("user", JSON.stringify(user));
      
    }
    dispatch(login(user));
   navigate("/tasks");
  };

  const handleSignout = () => {
    localStorage.removeItem("user");
    navigate("/");
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
            <hr/>
      <hr/>
            <TaskList/>
          </>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>{isSignup ? "Signup" : "Login"}</Typography>
            
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal"/>

            <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal"/>

            <Button onClick={handleAuth} variant="contained" sx={{ mt: 2 }}>{isSignup ? "Sign Up" : "Login"}</Button>
            <Button onClick={() => setIsSignup(!isSignup)}
              sx={{ mt: 2, display: "block" }}>
              {isSignup ? "Already have an account? Login" : "New user? Sign up"}
            </Button>
            

          </>
        )}
      </Paper>
    </Container>
  );
};

export default Auth;
