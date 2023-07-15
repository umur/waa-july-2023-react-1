import { api } from "../../../../util/api";
import { Product } from "../model/product.model";

const productBaseUrl = "/products";
function getProducts(): Promise<Product[]> {
  return api.get(`${productBaseUrl}`);
}

function deleteProduct(id: number): Promise<Product> {
  return api.delete(`${productBaseUrl}/${id}`);
}

function addProduct(product: Product): Promise<Product> {
  return api.post(`${productBaseUrl}`, product);
}

function updateProduct(product: Product): Promise<Product> {
  return api.put(`${productBaseUrl}/${product.id}`, product);
}

function getProduct(id: number): Promise<Product> {
  return api.get(`${productBaseUrl}/${id}`);
}

export const productService = {
  getProducts,
  deleteProduct,
  getProduct,
  addProduct,
  updateProduct,
};
