import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ProductTable from "./Components/ProductTable";
import AddProduct from "./Components/AddProduct";
import MenuAppBar  from "./Components/MenuAppBar";
import { Button,Box } from "@mui/material";
const addProduct=()=>{
  return(
<><AddProduct/></>
  );

}

function App() {
  return (
  <>
  <MenuAppBar/>

  <div style={{paddingTop:"30px"}}></div>
<Box 
   display="flex"
   justifyContent="flex-end"
   alignItems="flex-end"
   paddingBottom={1}
   paddingRight={27}
>
<Button onClick={addProduct} style={{backgroundColor:"#ffff"}} variant="outlined" alignConten="end">Add Product</Button>

</Box>


  <ProductTable/>
  </>
  );
}

export default App;
