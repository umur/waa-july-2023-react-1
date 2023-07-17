import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Product() {
    const { productId } = useParams();
    const handleSubmit = async () => {
        const accessToken = Cookies.get('token');
        console.log(accessToken);
        try {
            const response = await axios.get(`http://localhost:8080/products/${productId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    handleSubmit();
    return (
        <div>This is the product page for the product with id: {productId} </div>
    )
}
