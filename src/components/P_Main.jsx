import React from "react";

import O_Menu from './O_Menu.jsx';
import O_Footer from './O_Footer.jsx';

import T_IndexHeroBlock from "./T_IndexHeroBlock.jsx";
import T_IndexArticles from './T_IndexArticles.jsx';
import T_IndexChecklists from './T_IndexChecklists.jsx';
import T_IndexTests from './T_IndexTests.jsx';
import T_IndexResources from './T_IndexResources.jsx';
import T_IndexSecondBlock from './T_IndexSecondBlock.jsx';
import T_IndexForm from './T_IndexForm.jsx';

export default function P_Main({ headerLinks, footerLinks, socialLinks }) {

    return (
        <>
            <O_Menu headerLinks={headerLinks} />

            <T_IndexHeroBlock />
            {/* <T_IndexSecondBlock /> */}
            <T_IndexArticles />
            <T_IndexChecklists />
            <T_IndexTests />
            <T_IndexResources />
            <T_IndexForm />

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}
