import React, { forwardRef } from "react";

const A_SearchInput = forwardRef(({ value, onChange, placeholder = "" }, ref) => {
    return (
        <input
            ref={ref}
            className="search-input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
});

export default A_SearchInput;
