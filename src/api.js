import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT
});

// --- CRUD helpers ----------------------------------------------------------

export const listProducts   = ()          => api.get('products/');
export const createProduct  = data        => api.post('products/', data);
export const updateProduct  = (id, patch) => api.patch(`products/${id}/`, patch);
export const deleteProduct  = id          => api.delete(`products/${id}/`);
