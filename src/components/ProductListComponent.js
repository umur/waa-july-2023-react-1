const ProductListComponent = ({products}) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}><a href={"products/" + product.id}>{product.name}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default ProductListComponent;