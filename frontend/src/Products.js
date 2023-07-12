import React from 'react';
import Product from './Product';
export default function Products(props) {

    return (
        props.products.map((item) => {
            return (
                <Product
                    key={item.id}
                    name={item.name}
                    age={item.age}
                    email={item.email}
                />
            )
        })
    )

}