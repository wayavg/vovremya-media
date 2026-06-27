import React, { useEffect, useState, useRef } from "react";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';

// Logos
import Logo from '../images/styleguide/Logo.png';
import Logo2 from '../images/styleguide/Logo-2.png';
import Logo3 from '../images/styleguide/Logo-3.png';
import Logo4 from '../images/styleguide/Logo-4.png';

// Illustrations
import Illustration from '../images/styleguide/Illustration.png';
import Illustration2 from '../images/styleguide/Illustration-2.png';
import Illustration3 from '../images/styleguide/Illustration-3.png';
import HeroIllustration from '../images/styleguide/hero-Illustration.png';
import IllustrationFace from '../images/styleguide/IllustrationFace.png';

// Mascots
import MascotName1 from '../images/styleguide/MascotName1.png';
import MascotName2 from '../images/styleguide/MascotName2.png';
import MascotName3 from '../images/styleguide/MascotName3.png';

// Cards
import Card01 from '../images/styleguide/ilustrating-card-01.png';
import Card02 from '../images/styleguide/ilustrating-card-02.png';
import Card05 from '../images/styleguide/ilustrating-card-05.png';
import Card07 from '../images/styleguide/ilustrating-card-07.png';
import Card08 from '../images/styleguide/ilustrating-card-08.png';
import Card10 from '../images/styleguide/ilustrating-card-10.png';
import Card11 from '../images/styleguide/ilustrating-card-11.png';
import Card12 from '../images/styleguide/ilustrating-card-12.png';
import Card13 from '../images/styleguide/ilustrating-card-13.png';
import Card14 from '../images/styleguide/ilustrating-card-14.png';

// Quotes
import Quote1 from '../images/styleguide/Quote-1.png';
import Quote2 from '../images/styleguide/Quote-2.png';
import Quote3 from '../images/styleguide/Quote-3.png';
import Quote4 from '../images/styleguide/Quote-4.png';
import Quote5 from '../images/styleguide/Quote-5.png';
import Quote6 from '../images/styleguide/Quote-6.png';

// Photos
import Photo1 from '../images/styleguide/Photo-1.jpg';
import Photo2 from '../images/styleguide/Photo-2.jpg';
import Photo3 from '../images/styleguide/Photo-3.jpg';
import Photo4 from '../images/styleguide/Photo-4.jpg';
import Photo5 from '../images/styleguide/Photo-5.jpg';

// Decorative
import Path from '../images/styleguide/Path.png';
import Path2 from '../images/styleguide/Path-2.png';
import Path3 from '../images/styleguide/Path-3.png';
import Stars from '../images/styleguide/stars.png';
import Cloud from '../images/styleguide/cloud.png';
import Clocks from '../images/styleguide/clocks.png';
import Cubes from '../images/styleguide/cubes-1.png';
import Phone from '../images/styleguide/phone.png';
import Popkorn from '../images/styleguide/popkorn.png';
import Browser from '../images/styleguide/Browser.png';
import Notes from '../images/styleguide/Notes.png';
import Notebook from '../images/styleguide/notebook 1.png';
import Books1 from '../images/styleguide/books-1.png';
import Book1 from '../images/styleguide/book-1.png';
import OnBooks from '../images/styleguide/on_books.png';
import Pro from '../images/styleguide/pro.png';
import Img404 from '../images/styleguide/404-1.png';
import Icon from '../images/styleguide/Icon.png';
import Icon2 from '../images/styleguide/Icon-2.png';

const navItems = [
    { id: 'about', title: 'О бренде' },
    { id: 'logo', title: 'Логотип' },
    { id: 'palette', title: 'Палитра' },
    { id: 'typography', title: 'Типографика' },
    { id: 'illustrations', title: 'Иллюстрации' },
    { id: 'mascots', title: 'Персонажи' },
    { id: 'cards', title: 'Графика' },
    { id: 'photos', title: 'Фотографии' },
    { id: 'carriers', title: 'Носители' },
];

export default function P_Styleguide({ headerLinks, footerLinks, socialLinks }) {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        document.title = 'Стайлгайд — вовремя';
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 150;
            for (let i = navItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(navItems[i].id);
                if (el && el.offsetTop <= scrollY) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="sg">
            <O_Menu headerLinks={headerLinks} />

            {/* Hero */}
            <section className="sg-hero">
                <img src={HeroIllustration} alt="" className="sg-hero__img" />
                <div className="sg-hero__text">
                    <h1>вовремя</h1>
                    <p className="sg-hero__subtitle">СТАЙЛГАЙД МЕДИА</p>
                </div>
            </section>

            {/* Layout: sidebar + content */}
            <div className="sg-body">
                <aside className="sg-sidebar">
                    <a href="/vovremya-media/index.html" className="sg-sidebar__logo">вовремя</a>
                    <nav className="sg-sidebar__nav">
                        {navItems.map(s => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className={`sg-sidebar__link${activeSection === s.id ? ' sg-sidebar__link--active' : ''}`}
                                onClick={(e) => handleNavClick(e, s.id)}
                            >
                                {s.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                <main className="sg-main">
                    {/* О бренде */}
                    <section id="about" className="sg-section">
                        <h1 className="sg-section__title">О бренде</h1>

                        <div className="sg-row">
                            <h2 className="sg-row__label">Кто мы?</h2>
                            <div className="sg-row__content">
                                <p>Мы — медиа для молодых и амбициозных, которые хотят управлять своим временем и достигать большего вместе!</p>
                                <p>Платформа с ресурсами, незанудными статьями, чек‑листами, рабочими планами и инструментами, которые будут удерживать их внимание и помогут успевать больше без выгорания, побеждать FOMO и выстраивать баланс между учёбой, работой и отдыхом в поддерживающем сообществе.</p>
                            </div>
                        </div>

                        <div className="sg-row">
                            <h2 className="sg-row__label">Наша миссия</h2>
                            <div className="sg-row__content">
                                <p>Наша миссия — вдохновлять и наделять молодёжь возможностями эффективно управлять своим временем, чтобы они могли раскрывать свой потенциал, достигать амбициозных целей и наслаждаться полноценной, сбалансированной жизнью.</p>
                            </div>
                        </div>

                        <div className="sg-row">
                            <h2 className="sg-row__label">Суть</h2>
                            <div className="sg-row__content">
                                <p>Помочь студентам и школьникам старших классов совмещать работу, учёбу и личную жизнь, давая максимально практичные советы и помогая успевать всё.</p>
                            </div>
                        </div>

                        <div className="sg-row">
                            <h2 className="sg-row__label">Tone of Voice</h2>
                            <div className="sg-row__content">
                                <p>Мы как старший, но при этом крутой и понимающий друг, который всегда готов помочь, а не учить.</p>
                            </div>
                        </div>
                    </section>

                    {/* Логотип */}
                    <section id="logo" className="sg-section">
                        <h1 className="sg-section__title">Логотип</h1>
                        <div className="sg-row">
                            <div className="sg-row__label">
                                <img src={Logo} alt="Логотип" className="sg-logo-img" />
                            </div>
                            <div className="sg-row__content">
                                <p><strong>Основной логотип, используется в разных размерах.</strong></p>
                                <p>Соединяет в себе упорядоченность, наравне с хаотичностью и индивидуальность.</p>
                            </div>
                        </div>
                        <div className="sg-grid sg-grid--2">
                            <div className="sg-card sg-card--light"><img src={Logo} alt="" /></div>
                            <div className="sg-card sg-card--dark"><img src={Logo2} alt="" /></div>
                            <div className="sg-card sg-card--light"><img src={Logo3} alt="" /></div>
                            <div className="sg-card sg-card--dark"><img src={Logo4} alt="" /></div>
                        </div>
                    </section>

                    {/* Палитра */}
                    <section id="palette" className="sg-section">
                        <h1 className="sg-section__title">Палитра</h1>
                        <div className="sg-palette">
                            {[
                                { name: 'Лист тетради', hex: '#F8F4EB' },
                                { name: 'Выделитель', hex: '#D2E8FF' },
                                { name: 'Клеточка', hex: '#5884E7' },
                                { name: 'Чернила', hex: '#0B1956' },
                            ].map(c => (
                                <div key={c.hex} className="sg-palette__item">
                                    <div className="sg-palette__swatch" style={{ backgroundColor: c.hex }}></div>
                                    <p className="sg-palette__name">{c.name}</p>
                                    <p className="sg-palette__hex">{c.hex}</p>
                                </div>
                            ))}
                        </div>

                        <div className="sg-semantic">
                            <h2 className="sg-semantic__title">семантические цвета:</h2>
                            <div className="sg-semantic__list">
                                {[
                                    { color: '#8DDC52', hex: '#8DDC52', label: 'правильно' },
                                    { color: '#F1E061', hex: '#F1E061', label: 'что-то не так' },
                                    { color: '#F25C5C', hex: '#F25C5C', label: 'неправильно' },
                                ].map(s => (
                                    <div key={s.hex} className="sg-semantic__item">
                                        <div className="sg-semantic__circle" style={{ backgroundColor: s.color }}></div>
                                        <span>{s.hex}</span>
                                        <span className="sg-semantic__label">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Типографика */}
                    <section id="typography" className="sg-section">
                        <h1 className="sg-section__title">Типографика</h1>
                        <div className="sg-row">
                            <h2 className="sg-row__label sg-row__label--font">CoFo Drifter</h2>
                            <div className="sg-row__content">
                                <p>Моноширинный харизматичный шрифт, бегущий от цифровой холодности. Это настоящая личность, которая подчеркивает несовершенство.</p>
                            </div>
                        </div>
                        <p className="sg-alphabet sg-alphabet--title">Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя 0123456789</p>

                        <div className="sg-row">
                            <h2 className="sg-row__label sg-row__label--body">FreeSet</h2>
                            <div className="sg-row__content">
                                <p>Открытый гротеск для удобного прочтения.</p>
                            </div>
                        </div>
                        <p className="sg-alphabet sg-alphabet--body">Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя 0123456789</p>
                    </section>

                    {/* Иллюстрации */}
                    <section id="illustrations" className="sg-section">
                        <h1 className="sg-section__title">Иллюстрации</h1>
                        <div className="sg-grid sg-grid--3">
                            {[Illustration, Illustration2, Illustration3, IllustrationFace, Icon, Icon2].map((src, i) => (
                                <div key={i} className="sg-card"><img src={src} alt="" /></div>
                            ))}
                        </div>
                    </section>

                    {/* Персонажи */}
                    <section id="mascots" className="sg-section">
                        <h1 className="sg-section__title">Персонажи</h1>
                        <div className="sg-row">
                            <h2 className="sg-row__label">дудлы</h2>
                            <div className="sg-row__content">
                                <p>Наши персонажи — рандомные скетчи, которые мы часто рисуем на полях. Они отражают лайфстайл молодежи через иллюстрации в статьях, тестах, чек-листах и т.д. Они используются в мерче, иллюстрациях на сайте и в различных иконках.</p>
                            </div>
                        </div>
                        <div className="sg-grid sg-grid--3">
                            <div className="sg-card"><img src={MascotName1} alt="" /></div>
                            <div className="sg-card"><img src={MascotName2} alt="" /></div>
                            <div className="sg-card"><img src={MascotName3} alt="" /></div>
                        </div>
                    </section>

                    {/* Графика */}
                    <section id="cards" className="sg-section">
                        <h1 className="sg-section__title">Графика</h1>

                        <h2 className="sg-section__subtitle">Карточки статей</h2>
                        <div className="sg-grid sg-grid--4">
                            {[Card01, Card02, Card05, Card07, Card08, Card10, Card11, Card12, Card13, Card14].map((src, i) => (
                                <div key={i} className="sg-card"><img src={src} alt="" /></div>
                            ))}
                        </div>

                        <h2 className="sg-section__subtitle">Цитаты</h2>
                        <div className="sg-grid sg-grid--3">
                            {[Quote1, Quote2, Quote3, Quote4, Quote5, Quote6].map((src, i) => (
                                <div key={i} className="sg-card"><img src={src} alt="" /></div>
                            ))}
                        </div>

                        <h2 className="sg-section__subtitle">Декоративные элементы</h2>
                        <div className="sg-grid sg-grid--4">
                            {[Path, Path2, Path3, Stars, Cloud, Clocks, Cubes, Phone, Popkorn, Browser, Notes, Notebook, Books1, Book1, OnBooks, Pro, Img404].map((src, i) => (
                                <div key={i} className="sg-card"><img src={src} alt="" /></div>
                            ))}
                        </div>
                    </section>

                    {/* Фотографии */}
                    <section id="photos" className="sg-section">
                        <h1 className="sg-section__title">Фотографии</h1>
                        <div className="sg-grid sg-grid--3">
                            {[Photo1, Photo2, Photo3, Photo4, Photo5].map((src, i) => (
                                <div key={i} className="sg-card"><img src={src} alt="" /></div>
                            ))}
                        </div>
                    </section>

                    {/* Носители */}
                    <section id="carriers" className="sg-section">
                        <h1 className="sg-section__title">Носители</h1>
                        <p>Раздел в разработке</p>
                    </section>
                </main>
            </div>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </div>
    );
}
