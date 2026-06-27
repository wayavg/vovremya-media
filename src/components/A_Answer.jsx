import React from "react";

export default function A_Answer({ text, selected, onClick }) {
  return (
    <button
      className={`test-answer${selected ? " test-answer--selected" : ""}`}
      onClick={onClick}
      type="button"
    >
      <span className="test-answer__selector" />
      <span className="test-answer__text">{text}</span>
    </button>
  );
}
