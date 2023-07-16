import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Grid, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Reviews from "../components/Reviews";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  };

  return (
    <div>
      <NavBar />
      <Grid container padding={4} spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Typography variant="h5" align="center">
            Product Details
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <ProductCard product={product} />
        </Grid>

        <Grid item xs={7}>
          <Reviews productId={id} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Product;
