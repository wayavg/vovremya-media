import React from 'react';

import M_ChecklistCheckbox from './M_ChecklistCheckbox.jsx';

export default function O_ChecklistSection({ number, heading, items, checkedItems, onToggle }) {
  return (
    <>
      <div className="checklist-section__heading">
        <div className="checklist-section__heading-item">
          <h2>{heading}</h2>
        </div>
      </div>

      <section className="checklist-section__items">
        {items.map((item, i) => (
          <M_ChecklistCheckbox
            key={i}
            title={item.title}
            descriptions={item.descriptions}
            checked={checkedItems[i] || false}
            onToggle={(val) => onToggle(i, val)}
          />
        ))}
      </section>
    </>
  );
}
