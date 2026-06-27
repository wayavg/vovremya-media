import React from 'react';

import AchieveImage from '../images/achievements/achieve-illustration.png';

export default function O_AchieveCard({ level, nextLevel }) {
  return (
    <section className="container achieve-card">
      <div className="achieve-card__status">
        <h2 className="achieve-card__status-title">ура! новая ачивка!</h2>
      </div>
      <div className="achieve-card__level">
        <div className="achieve-card__image">
          <img src={AchieveImage} alt="Иллюстрация достижения" />
        </div>
        <div className="achieve-card__text">
          <div className="achieve-card__label-group">
            <span className="achieve-card__label">твой уровень:</span>
            <h1 className="achieve-card__level-name">{level}</h1>
          </div>
          <p className="achieve-card__description">
            теперь ты ближе к уровню {nextLevel}
            <br />
            тайм-менеджмента
          </p>
        </div>
      </div>
    </section>
  );
}
