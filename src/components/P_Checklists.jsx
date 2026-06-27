import React, { useEffect, useState } from 'react';
import { getData } from '../javascripts/airtable.js';

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';
import O_ChecklistCard from './O_ChecklistCard.jsx';
import M_Breadcrumbs from './M_Breadсrumbs.jsx';

export default function P_Checklists({ headerLinks, footerLinks, socialLinks }) {
    const [checklists, setChecklists] = useState([]);

    useEffect(() => {
        getData('checklist').then((data) => {
            setChecklists(data);
        });
    }, []);

    useEffect(() => {
        document.title = 'Чек-листы — вовремя';
    }, []);

    const breadcrumbItems = [
        { title: 'чек-листы' }
    ];

    const featured = checklists[0];
    const cards = checklists.slice(1);

    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <header className="header-checklists">
                <div className="header-checklists__container container">
                    <div className="header-checklists__title">
                        <M_Breadcrumbs items={breadcrumbItems} />
                        <h1>чек-листы</h1>
                    </div>
                    <div className="header-checklists__subtitle">
                        <h4>собрали готовые списки задач,<br/>для освоения новых техник</h4>
                    </div>
                </div>
            </header>

            <main>
                <section className="checklists-top container">
                    <div className="checklists-top__row">
                        {cards[0] && (
                            <O_ChecklistCard checklistData={cards[0]} />
                        )}
                        <div className="checklists-instruction">
                            <h4>как их использовать:</h4>
                            <div className="checklists-instruction__steps">
                                <div className="checklists-instruction__step">
                                    <span className="checklists-instruction__num">1/</span>
                                    <span className="checklists-instruction__text">скачай и распечатай чек-листы</span>
                                </div>
                                <div className="checklists-instruction__step">
                                    <span className="checklists-instruction__num">2/</span>
                                    <span className="checklists-instruction__text">используй их, выполняя таски по шагам</span>
                                </div>
                                <div className="checklists-instruction__step">
                                    <span className="checklists-instruction__num">3/</span>
                                    <span className="checklists-instruction__text">управляй своим временем проще</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checklists-top__row">
                        {cards[1] && (
                            <O_ChecklistCard checklistData={cards[1]} size="medium" />
                        )}
                        {cards[2] && (
                            <O_ChecklistCard checklistData={cards[2]} />
                        )}
                    </div>
                </section>

                {featured && (
                    <section className="checklists-featured">
                        <div className="checklists-featured__container container">
                            <div className="checklists-featured__heading">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4L28.944 17.832L44 18.72L32.208 28.368L35.76 43.2L24 35.04L12.24 43.2L15.792 28.368L4 18.72L19.056 17.832L24 4Z" fill="#0B1956"/>
                                </svg>
                                <h4>маст-хев марта</h4>
                            </div>
                            <O_ChecklistCard checklistData={featured} size="large" />
                        </div>
                    </section>
                )}

                <section className="checklists-grid container">
                    <div className="checklists-grid__row">
                        {cards.slice(3, 6).map(item => (
                            <O_ChecklistCard key={item.id} checklistData={item} />
                        ))}
                    </div>
                    <div className="checklists-grid__row">
                        {cards[6] && (
                            <O_ChecklistCard checklistData={cards[6]} size="medium" />
                        )}
                        {cards[7] && (
                            <O_ChecklistCard checklistData={cards[7]} />
                        )}
                    </div>
                </section>
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
