import React, { useState } from 'react';

export default function ProductForm({ onAdd }) {
  const [draft, setDraft] = useState({
    product_name: '',
    quantity_in_stock: 0,
    price: 0.0
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!draft.product_name.trim()) return;
    onAdd(draft);
    setDraft({ ...draft, product_name: '' });
  };

  return (
    <form id="product-form" onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={draft.product_name}
        onChange={e => setDraft({ ...draft, product_name: e.target.value })}
      />
      <input
        placeholder="Quantity"
        type="number"
        min="0"
        value={draft.quantity_in_stock}
        onChange={e =>
          setDraft({ ...draft, quantity_in_stock: Number(e.target.value) })
        }
      />
      <input
        placeholder="Price"
        type="number"
        step="0.01"
        min="0"
        value={draft.price}
        onChange={e => setDraft({ ...draft, price: Number(e.target.value) })}
      />
      <button type="submit">Add</button>
    </form>
  );
}

