import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { login } from "../redux/authSlice";  // ✅ Ensure login action is correctly imported

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(login(user));  // ✅ Dispatch login action correctly
    navigate("/tasks");  // ✅ Redirect after signup
  };

  return (
    <Container>
      <h2>Signup</h2>
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
      <Button onClick={handleSignup} variant="contained" sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Container>
  );
};

export default Signup;  // ✅ Correct export
