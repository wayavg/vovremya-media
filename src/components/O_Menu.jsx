import React from "react";

import vovremyaLogo from '../images/footer/logo/1.gif';

export default function O_Menu ({
        menuLinks = []
    }) 

    {
    const menuItems = menuLinks.map((menuItem, i) => {
        return (
            <li>
                <a key={i} href={menuItem.link}>{menuItem.title}</a>
            </li>
        )
    })

    return (
        <header class="menu-header">
            <div class="menu-header__container">
                <div class="menu-header__logo-content">
                <a class="menu-header__logo" href="../index.html"><img src={vovremyaLogo} alt="logo"/></a>
                </div>
                <div class="menu-header__content">
                <nav class="menu-header__navigation">
                    <ul class="menu-header__points">
                        {menuItems}
                    </ul>
                </nav>
                <a href="#" class="secondary-button mobile">рандомная статья</a>
                </div>

                <div class="menu-header__burger active">
                <div class="menu-header__burger-wrap">
                    <span></span><span></span><span></span>
                </div>
                </div>
            </div>
        </header>
    )
}