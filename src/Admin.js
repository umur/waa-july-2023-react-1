import React, {useState} from 'react';
import Products from './Products';
import axios from 'axios';


const Admin =() =>{
    const [products, setProducts]=useState([
       {id:11, name:'phone', price: 1000.00},
       {id:12, name:'computer', price: 1500.00},
       {id:13, name:'book', price: 5.00}
    ]);

    const[selectedProduct,setSelectedProduct]= useState(null);
    const[updatedName, setUpdatedName]= useState('');

    const ProductClick=(product)=>{
        setSelectedProduct(product);
    }
    const UpdateName= ()=>{
        const updatedProducts = products.map(product =>{
            if (product.id ===selectedProduct.id){
                return {...products, updatedName};
            }
            return product;
        });
        setProducts(updatedProducts);
        setSelectedProduct({...setProducts, UpdateName});

    }
    const EditButton =()=>{
        console.log('Edit Button for product:', setProducts);
        axios.put(`http://localhost:8080/products/all'${selectedProduct.id}`, selectedProduct)
      .then(response => {
        const updatedProducts= products.map(post => {
          if (post.id === selectedProduct.id) {
            return response.data;
          }
          return post;
        });
        setProducts(updatedProducts);
        setSelectedProduct(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }
    
    const DeleteButton = () => {
        console.log('Delete Button for product:', setProducts);
        const updatedProducts = products.filter(product => product.id !== setProducts.id);
        setProducts(updatedProducts);
        setSelectedProduct(null);
      }
      return (
        <div>
          <h1>Admin</h1>
         
            <div className="product-details">
              <h2>Product Details</h2>
              {products.map(p => (
                <div className='prod' key={p.id}>
                  <h3>{p.name}</h3>
                  <p>price: {p.price}</p>
                  <button onClick={EditButton}>Edit</button>
                  <button onClick={DeleteButton}>Delete</button>
                </div>
              ))}
            </div>
          {/* )} */}
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <button onClick={UpdateName}>Change Name</button>
        </div>
      );
    }
    
    export default Admin;
    
