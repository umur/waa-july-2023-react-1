import React from 'react'

const product = ({product, onclick}) =>{
    return (
        <div onClick={(onClick(product))}>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
        </div>
    )
}
export default product