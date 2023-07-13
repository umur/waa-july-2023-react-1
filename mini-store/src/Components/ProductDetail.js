import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function ProductDetail() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Detail
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Product name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="price"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rating"
            name="rating"
            label="rating"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="review"
            name="review"
            label="review"
            fullWidth
            variant="standard"
          />
        </Grid>
     
      </Grid>
    </React.Fragment>
  );
}