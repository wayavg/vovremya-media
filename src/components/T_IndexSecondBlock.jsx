import React from 'react';

import imgDesktop from '../images/main/secblock/2nd-Block1.png';
import imgLaptop from '../images/main/secblock/2nd-Block2.png';
import imgTablet from '../images/main/secblock/2nd-Block3.png';
import imgMobile from '../images/main/secblock/2nd-Block4.png';

export default function T_IndexSecondBlock() {
  return (
    <div className="second-block">
      <div className="second-block__container container">
        <div className="second-block__wrapper">
          <picture>
            <source media="(max-width: 767.8px)" srcSet={imgMobile} />
            <source media="(max-width: 991.8px)" srcSet={imgTablet} />
            <source media="(max-width: 1119.8px)" srcSet={imgLaptop} />
            <img src={imgDesktop} alt="" className="second-block__image" />
          </picture>

          <div className="second-block__overlay">
            <div className="second-block__phrases">
              <p className="second-block__phrase second-block__phrase--left title-4">
                понимаем тебя...
              </p>
              <p className="second-block__phrase second-block__phrase--right title-4">
                и знаем как всё организовать!
              </p>
            </div>

            <div className="second-block__cards">
              <div className="second-block__card second-block__card--left">
                <p className="second-block__card-title">
                  отобрали самую полезную инфу о&nbsp;тайм-менеджменте
                </p>
                <p className="second-block__card-desc">
                  перевели со скучного научного языка
                </p>
              </div>
              <div className="second-block__card second-block__card--right">
                <p className="second-block__card-title">
                  получилась куча незанудного и&nbsp;актуального контента
                </p>
                <p className="second-block__card-desc">
                  ты не потратишь впустую<br />
                  твой главный ресурс (время)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
