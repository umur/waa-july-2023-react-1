import React, {useState} from 'react';
import Products from './Products';
import './idex.css';

const Admin =() =>{
    const [products, setProducts]=useState([
       {id:011, name:'phone', price: 1000.00},
       {id:012, name:'computer', price: 1500.00},
       {id:013, name:'book', price: 5.00}
    ]);

    const[selectedProduct,setSelectedProduct]= useState(null);
    const[updatedName, setUpdatedName]= useState('');

    const ProductClick=(product)=>{
        setSelectedProduct(product);
    }
    const UpdateName= ()=>{
        const updatedProducts=products.map(product =>{
            if (productMessage.id ===selectedProduct.id){
                return {...product, name, updatedname};
            }
            return product;
        });
        setProducts(updatedProducts);
        setSelectedProduct({...selectedProduct,name, updatedName});

    }
    const EditButton =()=>{
        console.log('Edit Button for product:', selectedProduct);
    }
    const DeleteButton = () => {
        console.log('Delete Button for product:', selectedProduct);
        const updatedProducts = products.filter(product => product.id !== selectedProduct.id);
        setProducts(updatedProducts);
        setSelectedProduct(null);
      }
      return (
        <div className="container">
          <h1>Admin</h1>
          <Products products={products} onProductClick={ProductClick}
                 updatedName={updatedname} />
          {selectedProduct && (
            <div className="product-details">
              <h2>Product Details</h2>
              <h3><u>{selectedProduct.name}</u></h3>
              <p>price: {selectedPrice.price}</p>
              <p>Content: {selectedProduct.content}</p>
              <button onClick={EditButton}>Edit</button>
              <button onClick={DeleteButton}>Delete</button>
            </div>
          )}
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
    
