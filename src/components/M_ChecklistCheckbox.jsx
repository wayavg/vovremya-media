import React, { useState, useRef } from 'react';
import { startConfetti } from '../javascripts/confetti.js';

export default function M_ChecklistCheckbox({ title, descriptions, checked: controlledChecked, onToggle }) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;
  const boxRef = useRef(null);

  const handleClick = () => {
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    if (onToggle) onToggle(next);

    if (next && boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      startConfetti(centerX, centerY);
    }
  };

  return (
    <div className="checklist-checkbox">
      <div
        ref={boxRef}
        className={`checklist-checkbox__box${checked ? ' active' : ''}`}
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" viewBox="0 0 21 17" fill="none">
          <path d="M2.11841 8.51037L8.34063 14.1104L18.1184 2.11037" stroke="white" strokeWidth="3" strokeLinecap="square"/>
        </svg>
      </div>
      <div className="checklist-checkbox__content">
        <p className="large-text-bold">{title}</p>
        {descriptions && descriptions.length > 0 && (
          <div className="checklist-checkbox__descr">
            {descriptions.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
