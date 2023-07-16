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
import React from "react";

const initState = () => ({
  comment: "",
});

function AddReview({ getReviews, productId }) {
  const [state, setState] = React.useState(initState);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/reviews", { ...state, product: { id: productId } })
      .then((res) => {
        getReviews();
        setState(initState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box display="flex" justifyContent="center" minHeight="100vh">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} padding={4}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Add New Review
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="text"
              label="Comment"
              variant="outlined"
              fullWidth
              name="comment"
              value={state.comment}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Add Review
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AddReview;
