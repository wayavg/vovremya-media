import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';
import O_ArticleCard from './O_ArticleСard.jsx';
import M_Breadcrumbs from './M_Breadсrumbs.jsx';
import A_FilterChip from './A_FilterChip.jsx';
import A_Button from './A_Button.jsx';

const LEVELS = ['база', 'основа', 'про'];
const CATEGORIES = ['методы', 'организация', 'техники', 'советы'];
const INITIAL_COUNT = 4;

const levelDescriptions = {
    'база': 'В этом разделе мы собрали всё самое необходимое для старта в мир тайм-менеджмента. Здесь нет сложных теорий и заумных терминов — только понятные и практичные статьи.',
    'основа': 'В этом разделе всё для тех, кто уже в теме, но хочет прокачивать скиллы дальше. Обязательно подкрепляй теорию практикой, чтобы стать настоящим профи тайм-менеджмента.',
    'про': 'Продвинутый уровень для тех, кто готов выйти за рамки стандартных техник и найти свой уникальный подход к управлению временем.',
};

export default function P_Articles({ headerLinks, footerLinks, socialLinks }) {

    const [articles, setArticles] = useState([]);
    const [activeLevels, setActiveLevels] = useState([]);
    const [activeCategories, setActiveCategories] = useState([]);
    const [expandedLevels, setExpandedLevels] = useState({});

    useEffect(() => {
        getData('article').then((data) => {
            setArticles(data);
        });
    }, []);

    const toggleLevel = (level) => {
        setActiveLevels(prev =>
            prev.includes(level)
                ? prev.filter(l => l !== level)
                : [...prev, level]
        );
    };

    const toggleCategory = (cat) => {
        setActiveCategories(prev =>
            prev.includes(cat)
                ? prev.filter(c => c !== cat)
                : [...prev, cat]
        );
    };

    const toggleExpand = (level) => {
        setExpandedLevels(prev => ({
            ...prev,
            [level]: !prev[level]
        }));
    };

    const isFiltering = activeLevels.length > 0 || activeCategories.length > 0;

    const filteredArticles = articles.filter(item => {
        const levelMatch = activeLevels.length === 0 || activeLevels.includes(item['Difficulty level']);
        const catMatch = activeCategories.length === 0 ||
            (item.Category && item.Category.some(c => activeCategories.includes(c.toLowerCase())));
        return levelMatch && catMatch;
    });

    const breadcrumbItems = [
        { title: 'статьи' }
    ];

    const renderFilteredView = () => (
        <section className="articles-level container">
            <div className="articles-level__grid">
                {filteredArticles.map(item => (
                    <O_ArticleCard
                        key={item.id}
                        articleData={item}
                        cardClass="article-card-medium"
                    />
                ))}
            </div>
        </section>
    );

    const renderDefaultView = () => (
        <>
            {LEVELS.map((level, levelIndex) => {
                const levelArticles = articles.filter(
                    item => item['Difficulty level'] === level
                );
                if (levelArticles.length === 0) return null;

                const isEven = levelIndex % 2 === 1;
                const isExpanded = expandedLevels[level];
                const firstCard = levelArticles[0];
                const initialCards = levelArticles.slice(1, INITIAL_COUNT);
                const extraCards = levelArticles.slice(INITIAL_COUNT);
                const hasMore = extraCards.length > 0;

                return (
                    <section
                        key={level}
                        className={`articles-level container ${isEven ? 'articles-level--even' : ''}`}
                        id={`level-${level}`}
                    >
                        <div className="articles-level__header">
                            <O_ArticleCard
                                articleData={firstCard}
                                cardClass="article-card-large"
                            />
                            <div className="articles-level__descr">
                                <h2>уровень: {level}</h2>
                                <p>{levelDescriptions[level]}</p>
                            </div>
                        </div>

                        {initialCards.length > 0 && (
                            <div className="articles-level__grid">
                                {initialCards.map(item => (
                                    <O_ArticleCard
                                        key={item.id}
                                        articleData={item}
                                        cardClass="article-card-medium"
                                    />
                                ))}
                            </div>
                        )}

                        {isExpanded && extraCards.length > 0 && (
                            <div className="articles-level__grid">
                                {extraCards.map((item, i) => (
                                    <O_ArticleCard
                                        key={item.id}
                                        articleData={item}
                                        cardClass={i % 5 === 0 || i % 5 === 1 ? "article-card-large" : "article-card-medium"}
                                    />
                                ))}
                            </div>
                        )}

                        {hasMore && (
                            <div className="articles-level__more">
                                <button
                                    className="primary-button"
                                    onClick={() => toggleExpand(level)}
                                >
                                    {isExpanded ? 'свернуть' : 'показать ещё'}
                                </button>
                            </div>
                        )}
                    </section>
                );
            })}
        </>
    );

    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <header className="header-articles">
                <div className="header-articles__container container">
                    <div className="header-articles__title">
                        <M_Breadcrumbs items={breadcrumbItems} />
                        <h1>статьи</h1>
                    </div>

                    <div className="header-articles__filters">
                        <div className="header-articles__filter-group">
                            <span className="header-articles__filter-label">уровень сложности материала</span>
                            <div className="header-articles__filter-tags">
                                {LEVELS.map(level => (
                                    <A_FilterChip
                                        key={level}
                                        text={level}
                                        type="level"
                                        active={activeLevels.includes(level)}
                                        onClick={() => toggleLevel(level)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="header-articles__filter-group">
                            <span className="header-articles__filter-label">категория</span>
                            <div className="header-articles__filter-tags">
                                {CATEGORIES.map(cat => (
                                    <A_FilterChip
                                        key={cat}
                                        text={cat}
                                        type="category"
                                        active={activeCategories.includes(cat)}
                                        onClick={() => toggleCategory(cat)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {isFiltering ? renderFilteredView() : renderDefaultView()}
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
