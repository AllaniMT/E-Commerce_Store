import Products from "./products.json";

export function FetchAllProducts() {
  return Promise.resolve(Products);
}
