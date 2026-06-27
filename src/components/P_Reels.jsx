import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';
import O_ReelCard from './O_ReelCard.jsx';
import M_Breadcrumbs from './M_Breadсrumbs.jsx';

export default function P_Reels({ headerLinks, footerLinks, socialLinks }) {

    const [reels, setReels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData('resource').then((data) => {
            const reelItems = data.filter(item => item.Page === 'reels');
            setReels(reelItems);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        document.title = 'Лента — вовремя';
    }, []);

    const breadcrumbItems = [
        { title: 'лента' }
    ];

    const featured = reels[0];
    const topReels = reels.slice(1, 5);
    const moreReels = reels.slice(5);

    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <header className="header-articles">
                <div className="header-articles__container container">
                    <div className="header-articles__title">
                        <M_Breadcrumbs items={breadcrumbItems} />
                        <h1>лента</h1>
                    </div>
                </div>
            </header>

            <main className="container">
                <p className="reels-page__intro">
                    Мы собрали для тебя самые полезные тиктоки, если тебе уж совсем лень читать!
                </p>

                {featured && (
                    <div className="reels-page__featured">
                        <O_ReelCard reelData={featured} variant="big" />
                    </div>
                )}

                {topReels.length > 0 && (
                    <section className="reels-page__section">
                        <h2 className="reels-page__section-title">топ-подборка 2026</h2>
                        <div className="reels-page__grid">
                            {topReels.map(reel => (
                                <O_ReelCard key={reel.id} reelData={reel} variant="default" />
                            ))}
                        </div>
                    </section>
                )}

                {moreReels.length > 0 && (
                    <section className="reels-page__section">
                        <h2 className="reels-page__section-title">ещё интересные блоги</h2>
                        <div className="reels-page__small-grid">
                            {moreReels.map(reel => (
                                <O_ReelCard key={reel.id} reelData={reel} variant="small" />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
