import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";
import MenuAppBar from "./MenuAppBar";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Home() {
    const addProduct = useNavigate();

    return (
        <>
            <MenuAppBar />

            <div style={{ paddingTop: "30px" }}></div>
            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                paddingBottom={1}
                paddingRight={27}
            >
                <Button
                    onClick={()=>addProduct("/addProduct")}
                    style={{ backgroundColor: "#ffff" }}
                    variant="outlined" alignConten="end">
                    Add Product
                </Button>

            </Box>


            <ProductTable />
            { }
        </>
    );
}

export default Home;
