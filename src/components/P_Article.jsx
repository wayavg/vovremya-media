import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';
import O_ArticleHeader from './O_ArticleHeader.jsx';
import O_ReadMore from './O_ReadMore.jsx';

function fixHangingPrepositions(container) {
    const NBSP = ' ';
    const re = /(^|\s)(в|на|и|с|к|о|у|а|не|но|из|за|по|от|до|без|для|при|про|под|над|об|ни|же|бы|ли|то|во|со|ко|как|что|где|чем|кто|или|это|его|её|их|все|всё|она|они|оно|уже|вся|тем|там|тот|мне|вам|нам|вас|нас) /gi;

    container.querySelectorAll('p, h2, li, blockquote p').forEach(el => {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (!node.nodeValue.trim()) continue;
            let text = node.nodeValue;
            let prev;
            do { prev = text; text = text.replace(re, '$1$2' + NBSP); } while (text !== prev);
            node.nodeValue = text;
        }
    });
}

export default function P_Article({ headerLinks, footerLinks, socialLinks }) {

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pathname = window.location.pathname;
        const currentSlug = pathname.replace('/articles/', '').replace('.html', '');

        getData('article').then((data) => {
            const found = data.find(item => {
                const itemSlug = item.URL ? item.URL.replace('.html', '') : '';
                return itemSlug === currentSlug;
            });
            setArticle(found || null);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (article && article.Name) {
            document.title = article.Name + ' — вовремя';
        }
    }, [article]);

    useEffect(() => {
        if (!article || !article.Content) return;
        const container = document.querySelector('.article-content');
        if (container) fixHangingPrepositions(container);
    }, [article]);

    if (loading) {
        return (
            <>
                <O_Menu headerLinks={headerLinks} />
                <div className="container" style={{ paddingTop: '120px', paddingBottom: '64px' }}>
                    <p>Загрузка...</p>
                </div>
                <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
            </>
        );
    }

    if (!article) {
        return (
            <>
                <O_Menu headerLinks={headerLinks} />
                <div className="container" style={{ paddingTop: '120px', paddingBottom: '64px' }}>
                    <p>Статья не найдена.</p>
                </div>
                <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
            </>
        );
    }

    const hasContent = article.Content && article.Content.trim().length > 0;

    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <O_ArticleHeader articleData={article} view="article" />

            <main>
                {hasContent ? (
                    <article
                        className="article-content article-grid grid-auto-fit container"
                        dangerouslySetInnerHTML={{ __html: article.Content.replace(/className=/g, 'class=').replace(/^<>/, '').replace(/<\/>$/, '') }}
                    />
                ) : (
                    <article className="article-content article-grid grid-auto-fit container">
                        <h2>скоро будет</h2>
                    </article>
                )}

                <O_ReadMore excludeId={article.id} />
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
