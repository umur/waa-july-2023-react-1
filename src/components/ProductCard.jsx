import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardActionArea component={Link} to={`/products/${product?.id}`}>
        <CardContent>
          <Typography variant="h6" component="div">
            {product?.name}
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Typography component="div">$ {product?.price}</Typography>
            </Grid>

            <Grid item xs={4} pt={1}>
              {Array.apply(null, Array(product?.rating)).map((x) => (
                <FaStar />
              ))}
            </Grid>

            <Grid item xs={4}>
              <Chip label={product?.category?.name} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
