import React from "react";
import litresIcon from '../images/resources/Read/Organisms/Resources/litres.svg';

export default function O_BookCard({ bookData, variant = "default" }) {
    if (!bookData) return null;

    const imageUrl = bookData.Image?.[0]?.url || '';
    const author = bookData.Author || '';
    const name = bookData.Name || '';
    const description = bookData.Description || '';

    return (
        <div className={`book-card book-card--${variant}`}>
            <div className="book-card__image">
                {imageUrl && <img src={imageUrl} alt={name} />}
                <div className="book-card__tone" />
            </div>
            <div className="book-card__content">
                <div className="book-card__text">
                    <div className="book-card__heading">
                        <p className="book-card__author">{author}</p>
                        <p className="book-card__title">{name}</p>
                    </div>
                    {(variant === 'big' || variant === 'default') && description && (
                        <p className="book-card__description">{description}</p>
                    )}
                </div>
                <a href="https://www.litres.ru/" target="_blank" rel="noopener noreferrer" className="book-card__icon">
                    <img src={litresIcon} alt="Литрес" />
                </a>
            </div>
        </div>
    );
}
