import React from 'react';


export default function M_Breadcrumbs({ items = [] }) {
  
  if (items.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="/vovremya-media/index.html" className="breadcrumbs__link">главная</a>
        </li>
        
        {items.map((item, i) => {

          const isLast = i === items.length - 1;

          return (
            <li key={i} className="breadcrumbs__item">

              <span className="breadcrumbs__separator">/</span>
              
              {isLast ? (
                
                <span className="breadcrumbs__current" aria-current="page">
                  {item.title}
                </span>
              ) : (
                
                <a href={item.link} className="breadcrumbs__link">
                  {item.title}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
