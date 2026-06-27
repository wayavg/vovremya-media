import React from "react";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';

import IllustrationMain1 from '../images/about/IllustrationMain1.png';
import IllustrationMain2 from '../images/about/IllustrationMain2.png';
import IllustrationMain3 from '../images/about/IllustrationMain3.png';
import IllustrationMain4 from '../images/about/IllustrationMain4.png';

import Bubble1 from '../images/about/Bubble1.png';
import Bubble2 from '../images/about/Bubble2.png';
import Bubble3 from '../images/about/Bubble3.png';
import Bubble4 from '../images/about/Bubble4.png';

import SectionMain1 from '../images/about/SectionMain1.png';
import SectionMain2 from '../images/about/SectionMain2.png';
import SectionMain3 from '../images/about/SectionMain3.png';

import IllustrationBig from '../images/about/IllustrationBig.png';

import IllustrationGuy1 from '../images/about/IllustrationGuy1.png';
import IllustrationGuy2 from '../images/about/IllustrationGuy2.png';
import IllustrationGuy3 from '../images/about/IllustrationGuy3.png';
import IllustrationGuy4 from '../images/about/IllustrationGuy4.png';

import Icon1 from '../images/about/Icon1.png';
import Icon2 from '../images/about/Icon2.png';
import Icon3 from '../images/about/Icon3.png';
import Icon4 from '../images/about/Icon4.png';
import Icon5 from '../images/about/Icon5.png';

import Block1 from '../images/about/2ndBlock-1.png';
import Block2 from '../images/about/2ndBlock-2.png';
import Block3 from '../images/about/2ndBlock-3.png';
import Block4 from '../images/about/2ndBlock-4.png';

export default function P_About({ headerLinks, footerLinks, socialLinks }) {
    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <main className="about">
                {/* Hero */}
                <section className="about-hero">
                    <div className="about-hero__illustration">
                        <img src={IllustrationMain1} alt="Талисман ВоВремя" className="about-hero__main-img" />
                    </div>
                    <div className="about-hero__bubble">
                        <h5>Устал от дедлайнов?</h5>
                        <p className="paragraph">
                            Мы — медиа для молодых и амбициозных, которые хотят управлять
                            своим временем и достигать большего вместе!
                        </p>
                    </div>
                    <div className="about-hero__scroll">
                        <span>скролль ниже</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </section>

                {/* Triggers */}
                <section className="about-triggers">
                    <div className="about-triggers__bg">
                        <img src={Block1} alt="" className="about-triggers__bg-img about-triggers__bg-img--1" />
                        <img src={Block2} alt="" className="about-triggers__bg-img about-triggers__bg-img--2" />
                        <img src={Block3} alt="" className="about-triggers__bg-img about-triggers__bg-img--3" />
                        <img src={Block4} alt="" className="about-triggers__bg-img about-triggers__bg-img--4" />
                    </div>
                    <div className="about-triggers__content container">
                        <div className="about-triggers__row">
                            <div className="about-triggers__item">
                                <img src={Bubble1} alt="" className="about-triggers__bubble-img" />
                                <h6 className="about-triggers__text">дедлайны копятся и выбивают из колеи?</h6>
                            </div>
                            <div className="about-triggers__illustration">
                                <img src={IllustrationGuy1} alt="" />
                            </div>
                        </div>
                        <div className="about-triggers__row">
                            <div className="about-triggers__illustration">
                                <img src={IllustrationGuy2} alt="" />
                            </div>
                            <div className="about-triggers__item">
                                <img src={Bubble2} alt="" className="about-triggers__bubble-img" />
                                <h6 className="about-triggers__text">все попытки организовать время оканчивались провалом?</h6>
                            </div>
                        </div>
                        <div className="about-triggers__row">
                            <div className="about-triggers__item">
                                <img src={Bubble3} alt="" className="about-triggers__bubble-img" />
                                <h6 className="about-triggers__text">надоело жертвовать сном?</h6>
                            </div>
                            <div className="about-triggers__illustration">
                                <img src={IllustrationGuy3} alt="" />
                            </div>
                        </div>
                        <div className="about-triggers__row">
                            <div className="about-triggers__illustration">
                                <img src={IllustrationGuy4} alt="" />
                            </div>
                            <div className="about-triggers__item">
                                <img src={Bubble4} alt="" className="about-triggers__bubble-img" />
                                <h6 className="about-triggers__text">а когда жить среди всех этих дел?</h6>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution title */}
                <section className="about-solution-title container">
                    <h1>решение есть!</h1>
                </section>

                {/* Solution */}
                <section className="about-solution">
                    <div className="about-solution__content container">
                        <div className="about-solution__text">
                            <h2>здесь научитесь коннектиться со временем</h2>
                            <p className="paragraph">
                                Мы постоянно придумываем что&#8209;то новое, чтобы ты реально
                                научился управлять своим временем и успевать всё, что хочешь,
                                а не просто читал умные тексты.
                            </p>
                        </div>
                        <div className="about-solution__tags">
                            <div className="about-solution__tags-row about-solution__tags-row--top">
                                <span className="about-solution__tag about-solution__tag--blue">подкасты</span>
                                <span className="about-solution__tag about-solution__tag--light">приложения</span>
                                <span className="about-solution__tag about-solution__tag--blue">полезные сайты</span>
                            </div>
                            <div className="about-solution__tags-row about-solution__tags-row--bottom">
                                <span className="about-solution__tag about-solution__tag--light">чек-листы</span>
                                <span className="about-solution__tag about-solution__tag--blue">тесты</span>
                                <span className="about-solution__tag about-solution__tag--light">статьи-саммари</span>
                                <span className="about-solution__tag about-solution__tag--blue">книги</span>
                            </div>
                        </div>
                        <div className="about-solution__illustrations">
                            <img src={IllustrationMain2} alt="" />
                            <img src={IllustrationMain3} alt="" />
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="about-features">
                    <div className="container">
                        <div className="about-features__grid">
                            {/* Row 1 */}
                            <div className="about-features__card about-features__card--light about-features__card--top-left">
                                <div className="about-features__card-content">
                                    <h5>учёба и дедлайны</h5>
                                    <p>Гайды по планированию, шаблоны расписаний, Notion&#8209;шаблоны и формулы для таблиц, чтобы есть настроить тайм&#8209;менеджмент</p>
                                </div>
                                <div className="about-features__card-icon">
                                    <img src={Icon1} alt="" />
                                </div>
                            </div>

                            <div className="about-features__title-cell">
                                <h2 className="about-features__title">ловите фичи</h2>
                                <div className="about-features__title-illustration">
                                    <img src={SectionMain1} alt="" />
                                </div>
                            </div>

                            <div className="about-features__card about-features__card--light about-features__card--top-right">
                                <div className="about-features__card-content">
                                    <h5>общаемся на одном языке</h5>
                                    <p>Полезные и понятные ресурсы: видеоролики, современные учебники, карусели с фото и интересные тесты</p>
                                </div>
                                <div className="about-features__card-icon">
                                    <img src={Icon2} alt="" />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="about-features__card about-features__card--light about-features__card--center">
                                <div className="about-features__card-content">
                                    <h5>нет трудоголизму, да балансу</h5>
                                    <p>Статьи про эмоциональный отдых, избавление от чувства вины, важность второго графика рабочего времени</p>
                                </div>
                                <div className="about-features__card-icon">
                                    <img src={Icon3} alt="" />
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="about-features__card about-features__card--blue about-features__card--bottom-left">
                                <div className="about-features__card-content">
                                    <h5>ощущение естественности</h5>
                                    <p>Не Рим используем конструкции, метафоры и цвет группы и преподавателей</p>
                                </div>
                                <div className="about-features__card-icon">
                                    <img src={Icon4} alt="" />
                                </div>
                            </div>

                            <div className="about-features__card about-features__card--blue about-features__card--bottom-right">
                                <div className="about-features__card-content">
                                    <h5>баланс учёбы и отдыха</h5>
                                    <p>Подборки способов отдыха, гайды по управлению энергией</p>
                                </div>
                                <div className="about-features__card-icon">
                                    <img src={Icon5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Big illustration */}
                <section className="about-big-illustration">
                    <img src={IllustrationBig} alt="" />
                </section>

                {/* Form */}
                <section className="about-form">
                    <div className="about-form__wrapper container">
                        <div className="about-form__content">
                            <h2>держи руку на пульсе, подписывайся на обновления!</h2>
                            <form action="https://formspree.io/f/mjkaldlz" method="POST" className="about-form__form">
                                <input type="email" name="email" placeholder="E-mail" className="about-form__input" />
                                <button type="submit" className="primary-button">подписаться</button>
                            </form>
                            <p className="about-form__privacy">* Подписываясь, вы даёте согласие на обработку данных</p>
                        </div>
                        <div className="about-form__illustration">
                            <img src={IllustrationMain4} alt="" />
                        </div>
                    </div>
                </section>
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
