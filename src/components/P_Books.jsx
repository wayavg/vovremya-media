import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';
import O_BookCard from './O_BookCard.jsx';
import M_Breadcrumbs from './M_Breadсrumbs.jsx';

export default function P_Books({ headerLinks, footerLinks, socialLinks }) {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData('resource').then((data) => {
            const bookItems = data.filter(item => item.Page === 'books');
            setBooks(bookItems);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        document.title = 'Что почитать? — вовремя';
    }, []);

    const breadcrumbItems = [
        { title: 'что почитать?' }
    ];

    const featured = books[0];
    const topBooks = books.slice(1, 5);
    const moreBooks = books.slice(5);

    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <header className="header-articles">
                <div className="header-articles__container container">
                    <div className="header-articles__title">
                        <M_Breadcrumbs items={breadcrumbItems} />
                        <h1>что почитать?</h1>
                    </div>
                </div>
            </header>

            <main className="container">
                <p className="books-page__intro">
                    Мы собрали для тебя книги, которые ты можешь прочитать, чтобы углубиться в тему тайм-менеджмента!
                </p>

                {featured && (
                    <div className="books-page__featured">
                        <O_BookCard bookData={featured} variant="big" />
                    </div>
                )}

                {topBooks.length > 0 && (
                    <section className="books-page__section">
                        <h2 className="books-page__section-title">топ-подборка 2026</h2>
                        <div className="books-page__grid">
                            {topBooks.map(book => (
                                <O_BookCard key={book.id} bookData={book} variant="default" />
                            ))}
                        </div>
                    </section>
                )}

                {moreBooks.length > 0 && (
                    <section className="books-page__section">
                        <h2 className="books-page__section-title">почитать ещё</h2>
                        <div className="books-page__small-grid">
                            {moreBooks.map(book => (
                                <O_BookCard key={book.id} bookData={book} variant="small" />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
