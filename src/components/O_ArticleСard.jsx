import React from 'react';

import ImageCard from '../images/card-article/ilustrating-card-11.png';

export default function O_ArticleСard({ articleData, cardClass }) {

  if (!articleData) return null;

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [day, month, year] = dateStr.split('-');
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return `${year} ${months[parseInt(month) - 1]} ${day} г.`;
  };

  const imageSrc = articleData.Image && articleData.Image.length > 0
    ? articleData.Image[0].thumbnails.large.url
    : ImageCard;

  return (
    <article className={cardClass}>
      <a href={`/vovremya-media/articles/${articleData.URL}`} className="article-card-medium__link">
        <div className={`${cardClass}__container`}>
          
          <div className={`${cardClass}__img`}>
            <img src={imageSrc} alt={articleData.A_Name || 'Иллюстрация статьи'} />
          </div>

          <div className={`${cardClass}__content`}>
            <div className={`${cardClass}__meta`}>
              
              <div className={`${cardClass}__meta-box`}>
                {articleData['Difficulty level'] && (
                  <div className="meta-tag-a">
                    <span>{articleData['Difficulty level']}</span>
                  </div>
                )}
                {articleData['Reading time'] && (
                  <div className="read-time">
                    <svg className='icon-clock' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="9.175" strokeWidth="2" stroke="currentColor"/>
                      <path d="M11 5V11L14 8.75" strokeWidth="2" stroke="currentColor" fill="none"/>
                    </svg>
                    <span className="meta-read-time">{articleData['Reading time']} мин</span>
                  </div>
                )}
              </div>

              <div className={`${cardClass}__meta-box`}>
                {articleData.Category && articleData.Category.length > 0 && (
                  <div className="header-article__topics">
                    {articleData.Category.map((topic, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span className="topic">+</span>}
                        <span className="topic">{topic}</span>
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {articleData.Date && (
                  <time dateTime={articleData.Date.split('.').reverse().join('-')}>
                    {formatDate(articleData.Date)}
                  </time>
                )}
              </div>

            </div>

            <span className={`${cardClass}__title`}>
              {articleData.Name}
            </span>
          </div>

        </div>

        <div className={`${cardClass}__bottom-border`}></div>
      </a>
    </article>
  );
}

