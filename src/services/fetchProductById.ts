import { fetchApi } from "../api/api";
import { Product } from "../types";

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetchApi("GET", `/products/${id}`);
  return response.data;
};
