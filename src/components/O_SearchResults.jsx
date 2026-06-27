import React from "react";

import O_ArticleСard from './O_ArticleСard.jsx';
import O_Testcard from './O_Testcard.jsx';
import O_ChecklistCard from './O_ChecklistCard.jsx';

export default function O_SearchResults({ results }) {
    if (!results || !results.query) return null;

    return (
        <div className="search-results">
            <p className="search-results__summary">
                по вашему запросу «{results.query}» найдено совпадений: <span>{results.total}</span>
            </p>

            {results.articles.length > 0 && (
                <SearchSection title="статьи" count={results.articles.length}>
                    {results.articles.map((item) => (
                        <O_ArticleСard
                            key={item.id}
                            articleData={item}
                            cardClass="article-card-medium"
                        />
                    ))}
                </SearchSection>
            )}

            {results.tests.length > 0 && (
                <SearchSection title="тесты" count={results.tests.length} modifier="tests">
                    {results.tests.map((item) => (
                        <O_Testcard key={item.id} testData={item} />
                    ))}
                </SearchSection>
            )}

            {results.checklists.length > 0 && (
                <SearchSection title="чек-листы" count={results.checklists.length}>
                    {results.checklists.map((item) => (
                        <O_ChecklistCard key={item.id} checklistData={item} />
                    ))}
                </SearchSection>
            )}

            {results.total === 0 && (
                <p className="search-results__empty">Ничего не найдено</p>
            )}
        </div>
    );
}

function SearchSection({ title, count, modifier, children }) {
    return (
        <section className="search-section">
            <h2 className="search-section__title">{title} ({count})</h2>
            <div className={`search-section__cards ${modifier ? `search-section__cards--${modifier}` : ''}`}>
                {children}
            </div>
        </section>
    );
}
