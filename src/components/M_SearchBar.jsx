import React, { useRef, useEffect } from "react";

import A_SearchInput from "./A_SearchInput.jsx";
import searchIcon from '../images/icons/Atoms/Type=search, Color=Dark, Size=M, Style=Bold.svg';

export default function M_SearchBar({ value, onChange, onClose }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="search-bar">
            <span className="search-bar__icon">
                <img src={searchIcon} alt="Поиск" />
            </span>
            <A_SearchInput
                ref={inputRef}
                value={value}
                onChange={onChange}
            />
            <button
                className="search-bar__close"
                onClick={onClose}
                aria-label="Закрыть поиск"
            >✕</button>
        </div>
    );
}
