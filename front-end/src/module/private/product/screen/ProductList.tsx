import React, { useContext, useEffect, useState } from "react";
import { Product } from "../model/product.model";
import { productService } from "../service/product.service";
import { getProductEditPath, productAddPath, productEditPath } from "./ProductDetail";
import { Link, useNavigate } from "react-router-dom";
import { ModalContext } from "../../../../component/Modal/modal.context";
import { modalActions } from "../../../../component/Modal/modal.reducer";

export const productListPath = "/products";

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const { dispatch: dispatchModal } = useContext(ModalContext);

  useEffect(() => {
    getProducts();

    return () => {
      setProducts([]);
    };
  }, []);

  const getProducts = () => {
    productService.getProducts().then((_products: Product[]) => {
      setProducts(_products);
    });
  };

  const onDelete = (product: Product) => {
    dispatchModal({
      type: modalActions.SHOW,
      config: {
        title: "Deleting a product",
        body: `Are you sure deleting '${product.name}'?`,
        okBtnText: "Delete",
        okBtnClass: "btn-danger",
        onOk: () => {
          productService.deleteProduct(product.id!).then((x) => {
            getProducts();
            dispatchModal({
              type: modalActions.HIDE,
            });
          });
        },
      },
    });
  };

  return (
    <div>
      <div className="align-items-baseline d-flex justify-content-between">
        <h3>Product list</h3>
        <button
          onClick={() => navigate(productAddPath)}
          className="btn btn-primary"
        >
          New product
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product.id}>
              <td>{i + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>
                <Link to={getProductEditPath(product.id!)}>Edit</Link>
                <a className="px-2" href="#" onClick={() => onDelete(product)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
