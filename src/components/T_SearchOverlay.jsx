import React, { useState, useEffect, useCallback } from "react";
import { getData } from '../javascripts/airtable.js';

import O_SearchResults from './O_SearchResults.jsx';

export default function T_SearchOverlay({ searchQuery, onClose, onRegisterSearch }) {
    const [searchResults, setSearchResults] = useState(null);
    const [allData, setAllData] = useState({ articles: [], tests: [], checklists: [] });
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        loadSearchData();
    }, []);

    useEffect(() => {
        if (onRegisterSearch) {
            onRegisterSearch(performSearch);
        }
    }, [allData]);

    useEffect(() => {
        if (dataLoaded && searchQuery) {
            performSearch(searchQuery);
        }
    }, [dataLoaded]);

    const loadSearchData = async () => {
        const [articles, tests, checklists] = await Promise.all([
            getData('article'),
            getData('test'),
            getData('checklist'),
        ]);
        setAllData({ articles, tests, checklists });
        setDataLoaded(true);
    };

    const cleanStr = (str) => {
        if (!str) return '';
        return str.replace(/[  ]/g, ' ').replace(/[.,\/#!$%\^&\*;:{}=_`()]/g, '').toLowerCase();
    };

    const performSearch = useCallback((query) => {
        if (!query || query.length < 2) {
            setSearchResults(null);
            return;
        }
        const q = query.toLowerCase();

        const filterItems = (items) =>
            items.filter(item => {
                const title = cleanStr(item.Name || item.Title || '');
                const desc = cleanStr(item.Description || '');
                return title.includes(q) || desc.includes(q);
            });

        const articles = filterItems(allData.articles);
        const tests = filterItems(allData.tests);
        const checklists = filterItems(allData.checklists);
        const total = articles.length + tests.length + checklists.length;

        setSearchResults({ articles, tests, checklists, total, query });
    }, [allData]);

    return (
        <div className="search-overlay" onClick={onClose}>
            <div className="search-overlay__content" onClick={(e) => e.stopPropagation()}>
                <O_SearchResults results={searchResults} />
            </div>
        </div>
    );
}
