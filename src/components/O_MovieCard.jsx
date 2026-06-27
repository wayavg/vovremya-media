import React from "react";
import kinopoiskIcon from '../images/resources/kinopoisk.svg';

export default function O_MovieCard({ movieData, variant = "default" }) {
    if (!movieData) return null;

    const imageUrl = movieData.Image?.[0]?.url || '';
    const name = movieData.Name || '';
    const year = movieData.Year || '';
    const description = movieData.Description || '';

    return (
        <div className={`movie-card movie-card--${variant}`}>
            <div className="movie-card__image">
                {imageUrl && <img src={imageUrl} alt={name} />}
                <div className="movie-card__tone" />
            </div>
            <div className="movie-card__content">
                <div className="movie-card__text">
                    <div className="movie-card__heading">
                        <p className="movie-card__title">{name}</p>
                        <p className="movie-card__year">{year}</p>
                    </div>
                    {(variant === 'big' || variant === 'default') && description && (
                        <p className="movie-card__description">{description}</p>
                    )}
                </div>
                <div className="movie-card__icon">
                    <img src={kinopoiskIcon} alt="Кинопоиск" />
                </div>
            </div>
        </div>
    );
}
