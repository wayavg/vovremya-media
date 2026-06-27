import React, { useEffect, useState } from 'react';
import { getData } from '../javascripts/airtable.js';
import O_ArticleCard from './O_ArticleСard.jsx';

import readMoreImg from '../images/articles/read-more.png';

export default function O_ReadMore({ excludeId, count = 3 }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData('article').then((data) => {
            const others = excludeId ? data.filter(item => item.id !== excludeId) : data;
            setArticles(others.slice(0, count));
        });
    }, [excludeId, count]);

    if (articles.length === 0) return null;

    return (
        <section className="read-more container">
            <div className="read-more__top-image">
                <img src={readMoreImg} alt="" />
            </div>
            <h2>Читай дальше:</h2>

            <div className="read-more__cards">
                {articles.map(item => (
                    <O_ArticleCard
                        key={item.id}
                        articleData={item}
                        cardClass="article-card-medium"
                    />
                ))}
            </div>
        </section>
    );
}
