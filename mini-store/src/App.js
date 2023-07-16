import AExamole from "./Components/A";
import BExamole from "./Components/B";
import '../src/Style/App.css';
 

import {Link,Route, Routes } from 'react-router-dom';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import UpdateProduct from "./Components/UpdateProduct";




function App() {
  return (
<>
     <Routes>
     <Route path="/" element={<SignIn />}/>
      <Route path="/signUp" element={<SignUp />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/addProduct" element={<AddProduct />}/>
      <Route path="/products/:id" element={<UpdateProduct />}/>

      


    </Routes>
    </>
  );
}

export default App;
