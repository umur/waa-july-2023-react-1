import React,{useState,useEffect} from 'react'; 
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import ProductDetail from './ProductDetail';
import axiosInstance from '../Conig/axiosConfig';
import { useParams } from 'react-router-dom';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function UpdateProduct() {
    const initialProduct={name:"",price:0,rating:0,review:""}
const [existedProduct,setProduct] =useState(initialProduct)


    const params = useParams();
    const getProductById = async ()=>{

        const result = await axiosInstance.get(`/products/${params.id}`);
        const { name, price, rating } = result.data

        setProduct({
            name: name || "",
            price: price || 0,
            rating: rating || 0,
            review:  ""
        });
     
    // return {
    //     name: name || "",
    //     price: price || 0,
    //     rating: rating || 0,
    //     review:  ""
    // };

    }
 
    useEffect( ()=>{
         getProductById();
      
        console.log("dataaaaaa",existedProduct)


    },[params.id])
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
    
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
         
            <React.Fragment>
                <ProductDetail existedproduct={existedProduct}/>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                >
                 Update Product
                </Button>
            </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}