import React from "react";
import tiktokIcon from '../images/resources/tiktok.svg';

export default function O_ReelCard({ reelData, variant = "default" }) {
    if (!reelData) return null;

    const imageUrl = reelData.Image?.[0]?.url || '';
    const author = reelData.Author || '';
    const name = reelData.Name || '';
    const description = reelData.Description || '';

    return (
        <div className={`reel-card reel-card--${variant}`}>
            <div className="reel-card__image">
                {imageUrl && <img src={imageUrl} alt={name} />}
                <div className="reel-card__tone" />
            </div>
            <div className="reel-card__content">
                <div className="reel-card__text">
                    <div className="reel-card__heading">
                        <p className="reel-card__author">{author}</p>
                        <p className="reel-card__title">{name}</p>
                    </div>
                    {(variant === 'big' || variant === 'default') && description && (
                        <p className="reel-card__description">{description}</p>
                    )}
                </div>
                <div className="reel-card__icon">
                    <img src={tiktokIcon} alt="TikTok" />
                </div>
            </div>
        </div>
    );
}
