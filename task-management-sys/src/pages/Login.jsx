import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, colors } from "@mui/material";
import { red } from "@mui/material/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { email, password };
    dispatch(login(user));
    navigate("/tasks");
  };

  return (
    <Container>
      <h2>Login</h2>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
      <Button onClick={handleLogin} variant="contained">Login</Button>
    </Container>
  );
};

export default Login;
