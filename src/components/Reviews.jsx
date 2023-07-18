import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import ReviewCard from "./ReviewCard";
import AddReview from "./AddReview";

function Reviews({ productId }) {
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    axios.get(`/products/${productId}/reviews`).then((res) => {
      setReviews(res.data);
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Reviews
        </Typography>
      </Grid>
      {reviews.map((review) => (
        <Grid item xs={12}>
          <ReviewCard review={review} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <AddReview getReviews={getReviews} productId={productId} />
      </Grid>
    </Grid>
  );
}

export default Reviews;
