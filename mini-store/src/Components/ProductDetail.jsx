import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function ProductDetail(props) {
    const initialProduct={name:"",price:0,rating:0,review:""}
const [existedProduct,setProduct] =useState(initialProduct)

useEffect(()=>{
    setProduct(props.existedproduct===null?props.existedproduct:initialProduct)
},[])
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
            label="name"
            fullWidth
            variant="standard"
            defaultValue={existedProduct.name}
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
            defaultValue={existedProduct.price}

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
            defaultValue={existedProduct.rating}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="review"
            name="review"
            label="review"
            fullWidth
            variant="standard"
            defaultValue={existedProduct.review}

          />
        </Grid>
     
      </Grid>
    </React.Fragment>
  );
}