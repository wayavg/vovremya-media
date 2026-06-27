import React from "react";

export default function A_FilterChip({ text, active = false, type = "category", onClick }) {
    const isLevel = type === "level";

    return (
        <button
            className={`filter-chip ${isLevel ? 'filter-chip--level' : 'filter-chip--category'} ${active ? 'filter-chip--active' : ''}`}
            onClick={onClick}
        >
            <span className="filter-chip__text">{text}</span>
        </button>
    );
}
