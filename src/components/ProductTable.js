import React from 'react';

export default function ProductTable({ rows, onPatch, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '60px' }}>ID</th>
          <th>Name</th>
          <th style={{ width: '100px' }}>Qty</th>
          <th style={{ width: '120px' }}>Price</th>
          <th style={{ width: '60px' }} />
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
                min="0"
                value={r.quantity_in_stock}
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
                min="0"
                value={r.price}
                onChange={e =>
                  onPatch(r.product_id, { price: Number(e.target.value) })
                }
              />
            </td>
            <td>
              <button
                className="delete-btn"
                onClick={() => onDelete(r.product_id)}
              >
                ✕
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
