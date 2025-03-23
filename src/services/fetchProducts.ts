import { fetchApi } from "../api/api";
import { Product } from "../types";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetchApi("GET", "/products");
  return response.data; // Assumes response.data is an array of products
};
