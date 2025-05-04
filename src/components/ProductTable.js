import React from 'react';

export default function ProductTable({ rows, onPatch, onDelete }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.product_id}>
            <td>{r.product_id}</td>
            <td>{r.product_name}</td>

            <td>
              <input
                type="number"
                value={r.quantity_in_stock}
                min="0"
                style={{ width: '4rem' }}
                onChange={e =>
                  onPatch(r.product_id, {
                    quantity_in_stock: Number(e.target.value)
                  })
                }
              />
            </td>

            <td>
              <input
                type="number"
                step="0.01"
                value={r.price}
                style={{ width: '5rem' }}
                onChange={e =>
                  onPatch(r.product_id, { price: Number(e.target.value) })
                }
              />
            </td>

            <td>
              <button onClick={() => onDelete(r.product_id)}>✕</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
