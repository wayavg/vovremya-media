import React from "react";

import M_Breadcrumbs from "./M_Breadсrumbs.jsx";

import tgIcon from '../images/icons/social/tg-social.svg';
import vkIcon from '../images/icons/social/vk-social.svg';
import defaultHeaderImg from '../images/content/img-header-article-first.png';

export default function O_ArticleHeader({ articleData, view = "article" }) {

    if (!articleData) return null;

    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} г.`;
    };

    const headerImg = articleData.Image && articleData.Image.length > 0
        ? articleData.Image[0].thumbnails.large.url
        : defaultHeaderImg;

    const isChecklist = view === "checklist";

    const breadcrumbItems = isChecklist
        ? [
            { title: 'чек-листы', link: '/checklists.html' },
            { title: articleData.Name ? articleData.Name.substring(0, 30) + '...' : '' }
        ]
        : [
            { title: 'статьи', link: '/articles.html' },
            { title: articleData.Name ? articleData.Name.substring(0, 30) + '...' : '' }
        ];

    return (
        <header className={isChecklist ? "header-checklist" : "header-article"}>
            <div className={`${isChecklist ? "header-checklist" : "header-article"}__container container`}>
                <div className={`${isChecklist ? "header-checklist" : "header-article"}__main`}>
                    <div className={`${isChecklist ? "header-checklist__content" : "header-article__content"}`}>
                        <M_Breadcrumbs items={breadcrumbItems} />

                        <h1>{articleData.Name}</h1>

                        {isChecklist && articleData.Description && (
                            <p className="large-text">{articleData.Description}</p>
                        )}

                        {!isChecklist && (
                            <div className="header-article__meta">
                                {articleData['Difficulty level'] && (
                                    <div>
                                        <a href="#" className="meta-tag-a">
                                            <span>{articleData['Difficulty level']}</span>
                                        </a>
                                    </div>
                                )}

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
                                    <time dateTime={articleData.Date}>
                                        {formatDate(articleData.Date)}
                                    </time>
                                )}

                                {articleData['Reading time'] && (
                                    <div className="read-time">
                                        <svg className="icon-clock" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <circle cx="11" cy="11" r="9.175" strokeWidth="2" stroke="currentColor" />
                                            <path d="M11 5V11L14 8.75" strokeWidth="2" stroke="currentColor" fill="none" />
                                        </svg>
                                        <span className="meta-read-time">{articleData['Reading time']} мин</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <aside className={`${isChecklist ? "header-checklist" : "header-article"}__social`}>
                        <div className={`${isChecklist ? "header-checklist" : "header-article"}__social-sites`}>
                            <a href="#"><img src={tgIcon} alt="tg" /></a>
                            <a href="#"><img src={vkIcon} alt="vk" /></a>
                            <button className="share-button" aria-label="Поделиться">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                    <polyline points="16 6 12 2 8 6" />
                                    <line x1="12" y1="2" x2="12" y2="15" />
                                </svg>
                            </button>
                        </div>
                        {isChecklist && (
                            <a href="#" className="primary-button header-checklist__download">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                <span className="header-checklist__download-text">скачать и распечатать</span>
                            </a>
                        )}
                    </aside>
                </div>

                <div className={`${isChecklist ? "header-checklist" : "header-article"}__image`}>
                    <img src={headerImg} alt={articleData.Name || ''} />
                </div>
            </div>
        </header>
    );
}
