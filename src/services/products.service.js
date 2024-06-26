import axios from "axios";
import { API_BASE_URL } from "../constants/app.constants";

export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getProduct = async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
  return response.data;
};
