import {
  Avatar,
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

function ReviewCard({ review }) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Grid container>
          <Grid item xs={1}>
            <Avatar alt="O" />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="subtitle2" component="div">
              User Name
            </Typography>
            <Typography component="div">{review?.comment}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
