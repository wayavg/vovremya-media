import React from "react";

import A_Button from "./A_Button.jsx";

export default function T_IndexHeroBlock() {

    return (
        <header className="header-index-hero-block">
            <div className="header-index-hero-block__container container">
                <div className="header-index-hero-block__content">
                    <div className="header-index-hero-block__subtitles">
                        <p>устал от дедлайнов?</p>
                        <p>медиа для молодых и амбициозных</p>
                    </div>
                    <h1>Начни управлять своим временем</h1>
                    <div className="header-index-hero-block__btn">
                        <A_Button
                            type={'a'}
                            link={'articles.html'}
                            classprop={'primary-button'}
                            text={'к статьям!'}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
