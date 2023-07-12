import React from 'react'

const products = ({products, onProductClick}) => {
    return (
      <div className= "products-container">
          <h2>products</h2>
          {products.map(product=>(
              <div className="product" key={product.id}
              onClick={()=>onProductClick(product)}>
                  <p>{product.id}</p>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  </div>
          ))}
      </div>
    );
  };

  export default products