import React from 'react';

export default function M_ChecklistCounter({ checked, total }) {
  return (
    <div className="checklist-counter">
      <span className="checklist-amount">{checked}</span>
      <span>/</span>
      <span className="checklist-number">{total}</span>
    </div>
  );
}
