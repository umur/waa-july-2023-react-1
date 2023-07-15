import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { productService } from "../service/product.service";
import { Product } from "../model/product.model";
import { productListPath } from "./ProductList";

export const productAddPath = "/products/add";
export const productEditPath = "/products/:id";

export const getProductEditPath = (id: number) => {
  return productEditPath.replaceAll(":id", id.toString());
};

function ProductDetail() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [product, setProduct] = useState<Product>();

  let param = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (param.id) {
      productService.getProduct(Number(param.id)).then((_product) => {
        setProduct(_product);
        setName(_product.name);
        setPrice(_product.price);
        setRating(_product.rating);
      });
    }
  }, [param.id]);

  const saveProduct = async (e: any) => {
    e.preventDefault();

    let _product = {
      ...product,
      name,
      price,
      rating,
    };

    if (param.id) {
      await productService.updateProduct(_product);
    } else {
      await productService.addProduct(_product);
    }

    navigate(productListPath);
  };

  return (
    <form
      className="row g-3 m-auto"
      style={{ width: "600px" }}
      onSubmit={saveProduct}
    >
      <h3>Product detail</h3>
      {product?.id && (
        <div className="col-md-12">
          <label className="form-label">ID</label>
          <input
            type="text"
            className="form-control"
            value={product?.id}
            readOnly
          />
        </div>
      )}
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input
          required
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Rating</label>
        <input
          type="number"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default ProductDetail;
