import Products from "./Products";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import App from "./App";


export default function Admin() {

  const initialPersons = [
    { id: 1, name: "John", age: 30, email: "j@j.edu" },
    { id: 2, name: "Umur", age: 40, email: "u@u.edu" }
  ]

  const [products, setPersons] = useState(initialPersons);

  const getPersons = async () => {
    // send request
    const result = await axios.get("http://localhost:8080/products/all");
    
    // update state
    setPersons(result.data);
  }

  useEffect(() => {
    getPersons();

    return () => {
      // cleanup
    }
  }, [])

  const [colorState, setColorState] = useState("red");

  return (
    
    <div >
        <br/>
         <h2 className="text-center">Product List</h2>
         <div className="row">
             <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                product =>
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.description}</td>
                                        <td>

                                            <button className="btn btn-info"> Update </button>
                                            <button className="btn btn-danger"> Delete </button>
                                        </td>

                                    </tr>
                            )   
                        }
                    </tbody>
                </table>
                        

         </div>
    



      {/* <Products products={products }/> */}



    {/* <CreatePerson /> */}

    </div>


  );
}


