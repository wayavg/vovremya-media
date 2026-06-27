import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';
import O_MovieCard from './O_MovieCard.jsx';
import M_Breadcrumbs from './M_Breadсrumbs.jsx';

export default function P_Movies({ headerLinks, footerLinks, socialLinks }) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData('resource').then((data) => {
            const movieItems = data.filter(item => item.Page === 'movies');
            setMovies(movieItems);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        document.title = 'Что посмотреть? — вовремя';
    }, []);

    const breadcrumbItems = [
        { title: 'что посмотреть?' }
    ];

    const featured = movies[0];
    const topMovies = movies.slice(1, 5);
    const moreMovies = movies.slice(5);

    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <header className="header-articles">
                <div className="header-articles__container container">
                    <div className="header-articles__title">
                        <M_Breadcrumbs items={breadcrumbItems} />
                        <h1>что посмотреть?</h1>
                    </div>
                </div>
            </header>

            <main className="container">
                <p className="movies-page__intro">
                    Мы собрали для тебя крутые фильмы и сериалы, которые помогут тебе узнать что-то интересное о тайм-менеджменте и достигнуть успеха!
                </p>

                {featured && (
                    <div className="movies-page__featured">
                        <O_MovieCard movieData={featured} variant="big" />
                    </div>
                )}

                {topMovies.length > 0 && (
                    <section className="movies-page__section">
                        <h2 className="movies-page__section-title">топ-подборка 2026</h2>
                        <div className="movies-page__grid">
                            {topMovies.map(movie => (
                                <O_MovieCard key={movie.id} movieData={movie} variant="default" />
                            ))}
                        </div>
                    </section>
                )}

                {moreMovies.length > 0 && (
                    <section className="movies-page__section">
                        <h2 className="movies-page__section-title">посмотреть ещё</h2>
                        <div className="movies-page__small-grid">
                            {moreMovies.map(movie => (
                                <O_MovieCard key={movie.id} movieData={movie} variant="small" />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
