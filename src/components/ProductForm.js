import React, { useState } from 'react';

export default function ProductForm({ onAdd }) {
  const [draft, setDraft] = useState({
    product_name: '',
    description: '',
    quantity_in_stock: 0,
    price: 0.0
  });

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(draft);
    setDraft({ ...draft, product_name: '' });   // quick reset
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        placeholder="Name"
        value={draft.product_name}
        onChange={e => setDraft({ ...draft, product_name: e.target.value })}
      />
      <input
        placeholder="Quantity"
        type="number"
        value={draft.quantity_in_stock}
        onChange={e =>
          setDraft({ ...draft, quantity_in_stock: Number(e.target.value) })
        }
      />
      <input
        placeholder="Price"
        type="number"
        step="0.01"
        value={draft.price}
        onChange={e => setDraft({ ...draft, price: Number(e.target.value) })}
      />
      <button type="submit">Add</button>
    </form>
  );
}
