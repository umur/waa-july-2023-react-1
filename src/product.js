import React from 'react'

export default function Product(props){

    return (
        <div>
        <h4>{props.id}</h4>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
      
        </div>
    )
}
