import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

const initState = () => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "",
});

function Login() {
  const [state, setState] = React.useState(initState);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, []);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const roles = useMemo(() => ["ADMIN", "USER"], []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/uaa/authenticate", state)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <form onSubmit={handleSubmit}>
        <Grid width={400} container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Sign In
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to="/register">
              <Button variant="outlined" fullWidth>
                Register
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Login;
