import React from "react";

export default function O_TestResult({ title, summary, imageUrl }) {
  return (
    <div className="test-result-card">
      <div className="test-result-card__image">
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
      <div className="test-result-card__content">
        <h2 className="test-result-card__title">{title}</h2>
        <p className="test-result-card__summary">{summary}</p>
      </div>
    </div>
  );
}
