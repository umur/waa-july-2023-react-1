import React from 'react';
export default function Product(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h4>{props.email}</h4>
        </div>
    )
}