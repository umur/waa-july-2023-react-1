import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import ProductDetail from './ProductDetail';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AddProduct() {

 

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
                <ProductDetail/>
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