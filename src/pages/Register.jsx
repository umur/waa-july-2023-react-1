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

function Register() {
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
      .post("/uaa/register", state)
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
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="text"
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="text"
              label="Last Name"
              variant="outlined"
              fullWidth
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
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
            <FormControl label="Role" fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                required
                fullWidth
                label="Role"
                name="role"
                value={state.role}
                onChange={handleChange}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to="/login">
              <Button variant="outlined" fullWidth>
                Log In
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Register;
