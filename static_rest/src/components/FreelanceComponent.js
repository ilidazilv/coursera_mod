import React from "react";

const Freelance = (props) => {
    let products = [
        {
            id: 1,
            name: 2
        },
        {
            id: 2,
            name: 2
        },
        {
            id: 3,
            name: 2
        },
        {
            id: 4,
            name: 2
        }
    ]
    return (
        <table>
            <caption>Our products</caption>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>In Stock</th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Freelance;