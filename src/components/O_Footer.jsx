import React from 'react';

// import tgIcon from '../images/icons/social/tg-social.svg';
// import vkIcon from '../images/icons/social/vk-social.svg';
import footerImg from '../images/footer/footer-img.png';
import hseLogo from '../images/footer/logo/hse.svg';
import xLogo from '../images/footer/logo/x.svg';
import vovremyaLogo from '../images/footer/logo/vovremya.svg';

export default function O_Footer ({
        menuLinks = [],
        socialLinks = []
    }) 

    {
    const menuItems = menuLinks.map((menuItem, i) => {
        return (
            <li>
                <a key={i} href={menuItem.link}>{menuItem.title}</a>
            </li>
        )
    })

    const socialItems = socialLinks.map((socialItem, i) => {
        return (
            <a key={i} href={socialItem.link} target="_blank">
                <img src={socialItem.image} alt={socialItem.title} />
            </a>
        )
    })
    
    
  return (
    <footer className="footer bg-none">
      <div className="bg-none__top-bg"></div>
      <div className="bg-none__bottom-content">
        <div className="footer__container container">
          <div className="footer__main-content">
            <div className="menu">
              <nav>
                <ul>
                    {menuItems}
                </ul>
              </nav>
              <aside className="footer-social">
                {socialItems}
              </aside>
            </div>
            <div className="footer-img">
              <img src={footerImg} alt="picture" />
            </div>
          </div>
          <div className="footer__secondary-content">
            <div className="footer__logo">
              <div><img src={hseLogo} alt="hse logo" /></div>
              <div><img src={xLogo} alt="" /></div>
              <div><img src={vovremyaLogo} alt="vovremya logo" /></div>
            </div>
            <div className="footer__study-descr descr">
              Данный проект является учебной работой студентов Школы дизайна, не является коммерческим и служит образовательным целям.
            </div>
            <div className="footer__font-descr descr">
              На сайте используется шрифт CoFo Drifter от студии Contrast Foundry. Автор шрифта Egor Golovyrin.
            </div>
            <div className="footer__students footer-people">
              <div className="title">студенты</div>
              <div className="content">
                <div className="person">Елизавета Карезина</div>
                <div className="person">Анастасия Киселева</div>
                <div className="person">Тимур Явгильдин</div>
              </div>
            </div>
            <div className="footer__mentors footer-people">
              <div className="title">Кураторы</div>
              <div className="content">
                <div className="person">Антон Ларин</div>
                <div className="person">Юрий Сыров</div>
              </div>
            </div>
            <div className="footer__agree content">
              <a href="#">Пользовательское соглашение</a>
              <a href="#">Политика конфиденциальности</a>
              <a href="/vovremya-media/sitemap.html">карта медиа</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
