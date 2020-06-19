import Products from "./products.json";

export function FetchAllProducts() {
  return Promise.resolve(Products);
}

export function getProductById(id) {
  const product = Products.find((item) => item.id === id);
  return Promise.resolve(product);
}
