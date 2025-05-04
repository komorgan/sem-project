import React, { useEffect, useState } from 'react';
import {
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from './api';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';

export default function App() {
  const [rows, setRows] = useState([]);

  // ---- initial fetch ------------------------------------------------------
  useEffect(() => {
    listProducts().then(res => setRows(res.data));
  }, []);

  // ---- CRUD handlers ------------------------------------------------------
  const addProduct = data =>
    createProduct(data).then(res => setRows([...rows, res.data]));

  const patchProduct = (id, partial) =>
    updateProduct(id, partial).then(res =>
      setRows(rows.map(r => (r.product_id === id ? res.data : r)))
    );

  const removeProduct = id =>
    deleteProduct(id).then(() =>
      setRows(rows.filter(r => r.product_id !== id))
    );

  // ---- render -------------------------------------------------------------
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Inventory</h1>
      <ProductForm onAdd={addProduct} />
      <ProductTable
        rows={rows}
        onPatch={patchProduct}
        onDelete={removeProduct}
      />
    </main>
  );
}
