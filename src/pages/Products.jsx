import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/material";
import AddProduct from "../components/AddProduct";

function Products() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <NavBar />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AddProduct getProducts={getProducts} />
        </Grid>

        <Grid item xs={6}>
          <Grid container spacing={2} padding={4}>
            {products.map((product) => (
              <Grid item xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
