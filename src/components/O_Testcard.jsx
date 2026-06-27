import React from 'react';

import A_Button from './A_Button.jsx';

import ImageCard from '../images/card-article/ilustrating-card-11.png';

export default function O_Testcard({ testData }) {

  if (!testData) return null;

  return (
    <article className="test-card">
      <a href={testData.Link || '#'}>
        <div className="test-card__image">
          <img src={ImageCard} alt={testData.Name || 'Иллюстрация теста'} />
        </div>
        <div className="test-card__content">
          <p className="title-2">{testData.Name}</p>
          
          <p className="large-text">{testData.Description}</p>
          
          <A_Button 
              type={'span'} 
              classprop={'primary-button'} 
              text={'начать тест'} 
          />
        </div>
      </a>
    </article>
  );
}
