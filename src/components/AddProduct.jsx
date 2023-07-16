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
  name: "",
  rating: "",
  price: "",
  categoryId: "",
});

function AddProduct({ getProducts }) {
  const [state, setState] = React.useState(initState);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/products", { ...state, category: { id: state.categoryId } })
      .then((res) => {
        getProducts();
        setState(initState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box display="flex" justifyContent="center" minHeight="100vh">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} padding={10}>
          <Grid item xs={12}>
            <Typography variant="h4">Add Product</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="text"
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="number"
              inputProps={({ min: 0 }, { max: 5 })}
              label="Rating"
              variant="outlined"
              fullWidth
              name="rating"
              value={state.rating}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="number"
              inputProps={({ min: 0 }, { max: 5 }, { step: 0.01 })}
              label="Price"
              variant="outlined"
              fullWidth
              name="price"
              value={state.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl label="Category" fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                required
                fullWidth
                label="Category"
                name="categoryId"
                value={state.categoryId}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AddProduct;
