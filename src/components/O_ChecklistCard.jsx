import React from 'react';

import defaultImg from '../images/card-article/ilustrating-card-11.png';

export default function O_ChecklistCard({ checklistData, size = "small" }) {
    if (!checklistData) return null;

    const imageSrc = checklistData.Image && checklistData.Image.length > 0
        ? checklistData.Image[0].thumbnails.large.url
        : defaultImg;

    const sizeClass = size !== "small" ? ` checklist-card--${size}` : "";

    return (
        <article className={`checklist-card${sizeClass}`}>
            <a href={`/vovremya-media/checklists/${checklistData.url}`} className="checklist-card__link">
                <div className="checklist-card__container">
                    <div className="checklist-card__img">
                        <img src={imageSrc} alt={checklistData.Name || 'Иллюстрация чек-листа'} />
                    </div>
                    <div className="checklist-card__footer">
                        <span className="checklist-card__title">
                            {checklistData.Name}
                        </span>
                        <span className="checklist-card__points">
                            {checklistData.Punkt}
                        </span>
                    </div>
                </div>
                <div className="checklist-card__border"></div>
            </a>
        </article>
    );
}
