import React from "react";

import sourceIcon1 from '../images/main/source/source-ic-1.svg';
import sourceIcon2 from '../images/main/source/source-ic-2.svg';
import sourceIcon3 from '../images/main/source/source-ic-3.svg';
import arrowIcon from '../images/main/checklist/arrow.svg';

const resources = [
    {
        title: 'книги',
        description: 'подборка лучших книг про тайм-менеджмент, для тех, кто устал бесконечно смотреть в экран телефона',
        icon: sourceIcon1,
        link: '/resources/books.html',
    },
    {
        title: 'фильмы',
        description: 'мотивирующие и полезные фильмы и сериалы, просмотр которых не будет ощущаться, как трата времени',
        icon: sourceIcon2,
        link: '/resources/movies.html',
    },
    {
        title: 'блогеры',
        description: 'отборный контент из соц-сетей, который поможет узнавать о тайм-менеджменте, не отходя от скроллинга',
        icon: sourceIcon3,
        link: '/resources/reels.html',
    },
];

export default function T_IndexResources() {
    return (
        <div className="sources-index__bg">
            <div className="sources-index__filter">
                <div className="sources-index">
                    <div className="grid-auto-fit container">
                        <h2>Ресурсы</h2>
                        <h3>чтобы не тратить время на брейн-рот в соцсетях</h3>

                        {resources.map((item, index) => (
                            <a href={item.link} key={index} className="sources-index__card-checklist">
                                <div className="sources-index__card-content">
                                    <img src={item.icon} className="source-icon" alt="" />
                                    <div className="source-content">
                                        <p className="title-3">
                                            {item.title}
                                        </p>
                                        <p className="large-text">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <img src={arrowIcon} className="source-arrow" alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
