import React, { useState } from "react";

import vovremyaLogo from '../images/footer/logo/1.gif';
import searchIcon from '../images/icons/Atoms/Type=search, Color=Dark, Size=M, Style=Bold.svg';

import M_SearchBar from './M_SearchBar.jsx';
import T_SearchOverlay from './T_SearchOverlay.jsx';

export default function O_Menu({ headerLinks = [] }) {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHandler, setSearchHandler] = useState(null);

    const resourceLinks = headerLinks.filter(l =>
        ['/resources/books.html', '/resources/films.html', '/resources/blogs.html'].includes(l.link)
    );
    const mainLinks = headerLinks.filter(l => !resourceLinks.includes(l));

    const handleSearchOpen = () => {
        setSearchOpen(true);
        setBurgerOpen(false);
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
        setSearchQuery('');
    };

    const handleSearchInput = (e) => {
        const val = e.target.value;
        setSearchQuery(val);
        if (searchHandler) searchHandler(val);
    };

    const handleBurgerToggle = () => {
        setBurgerOpen(!burgerOpen);
        if (searchOpen) handleSearchClose();
    };

    return (
        <>
            <header className="menu-header">
                <div className="menu-header__container">
                    <div className="menu-header__logo-content">
                        <a className="menu-header__logo" href="/vovremya-media/index.html">
                            <img src={vovremyaLogo} alt="вовремя" />
                        </a>
                    </div>

                    {searchOpen ? (
                        <M_SearchBar
                            value={searchQuery}
                            onChange={handleSearchInput}
                            onClose={handleSearchClose}
                        />
                    ) : (
                        <div className={`menu-header__content ${burgerOpen ? 'active' : ''}`}>
                            <nav className="menu-header__navigation">
                                <ul className="menu-header__points menu-header__points--desktop">
                                    {mainLinks.map((item, i) => (
                                        <li key={i} className="menu-header__nav">
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    ))}
                                    {resourceLinks.length > 0 && (
                                        <>
                                            {resourceLinks.map((item, i) => (
                                                <li key={`full-${i}`} className="menu-header__nav menu-header__nav--full">
                                                    <a href={item.link}>{item.title}</a>
                                                </li>
                                            ))}
                                            <li className="menu-header__nav menu-header__nav--dropdown">
                                                <button className="menu-header__dropdown-trigger">
                                                    Ресурсы <span className="menu-header__dropdown-arrow">›</span>
                                                </button>
                                                <ul className="menu-header__dropdown-menu">
                                                    {resourceLinks.map((item, i) => (
                                                        <li key={i}>
                                                            <a href={item.link}>{item.title}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </>
                                    )}
                                </ul>

                                <ul className="menu-header__points menu-header__points--mobile">
                                    {headerLinks.map((item, i) => (
                                        <li key={i} className="menu-header__nav">
                                            <a href={item.link}>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <button
                                className="menu-header__search-btn"
                                onClick={handleSearchOpen}
                                aria-label="Поиск"
                            ><img src={searchIcon} alt="Поиск" /></button>

                            <a href="#" className="secondary-button menu-header__random-btn">рандомная статья</a>
                        </div>
                    )}

                    <div className="menu-header__burger" onClick={handleBurgerToggle}>
                        <div className="menu-header__burger-wrap">
                            {burgerOpen ? (
                                <span className="menu-header__burger-close-icon">✕</span>
                            ) : (
                                <><span></span><span></span><span></span></>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {searchOpen && (
                <T_SearchOverlay
                    searchQuery={searchQuery}
                    onClose={handleSearchClose}
                    onRegisterSearch={(fn) => setSearchHandler(() => fn)}
                />
            )}
        </>
    );
}
