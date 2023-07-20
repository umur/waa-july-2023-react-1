import React from "react";
export default function Person({ persons }) {
    return (
        <div>
            {/* <h1>Hello my friend</h1> */}
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {
                persons.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.firstName}</td> 
                        <td>{p.lastName}</td> 
                        <td>{p.password}</td> 
                        <td>{p.email}</td> 
                        <td>{p.address}</td> 
                    </tr>
                ))
                }
                </tbody>
            </table>
           
        </div>
    )
}