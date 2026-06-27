import React from "react";

export default function A_Button({text, type, classprop, link}) {
    const Tag = type
    return (
        <Tag href={link} className={classprop}>{text}</Tag>
    )
}