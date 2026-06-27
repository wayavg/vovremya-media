import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import A_Button from "./A_Button.jsx";
import O_ArticleCard from "./O_ArticleСard.jsx";

export default function T_IndexArticles() {

    const [tests, setTests] = useState([]);

  
    useEffect(() => {
        getData('article').then((data) => {
        setTests(data.slice(0, 4));
        });
    }, []);
    
    return (
        <>
            <div className="article-index">
                <div className="index-articles grid-auto-fit container">
                    <h2>Статьи</h2>
                    <h3>топ последних статей про тайм-менеджмент</h3>

                    <section className="article-index__descr">
                    <div className="article-index__description">
                        <h4>чё по статьям?</h4>
                        <p className="large-text">здесь приготовлена вкусняшка, собрали для тебя краткую выжимку, мастхэв рабочих техник мирового тайм-менеджмента</p>
                    </div>

                    <div className="article-index__inf">
                        <p className="large-text">есть три уровня сложности статей-саммари</p>
                        <div className="article-index__tags">
                        <a href="#" className="meta-tag-a">база</a>
                        <a href="#" className="meta-tag-a">основа</a>
                        <a href="#" className="meta-tag-a">про</a>
                        </div>
                    </div>
                    </section>

                    {tests.map((item, index) => (
                        <O_ArticleCard
                            key={item.id}
                            articleData={item}
                            cardClass={index === 0 ? "article-card-large" : "article-card-medium"}
                        />
                    ))}

                    <A_Button 
                        type={'a'} 
                        link={'articles.html'} 
                        classprop={'article-index__link primary-button'} 
                        text={'перейти к другим статьям'} 
                    />
                </div>
            </div>
        </>
    );
}

