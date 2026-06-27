import React from "react";

import M_Breadcrumbs from "./M_Breadсrumbs.jsx";
import O_Menu from './O_Menu.jsx';
import O_Footer from '../components/O_Footer.jsx';
import T_TestsMain from '../components/T_TestsMain.jsx'

export default function P_Tests({ headerLinks, footerLinks, socialLinks }) {

    const breadcrumbsData = [
        { title: 'тесты', link: '/tests.html' }
    ];

    return (
        <>
            <O_Menu headerLinks={headerLinks} />
            <main className="tests container grid-auto-fit">
                <div className="tests__header">
                    <M_Breadcrumbs items={breadcrumbsData} />
                    <h1>тесты</h1>
                </div>


                <T_TestsMain />
            </main>

            <O_Footer menuLinks={footerLinks} socialLinks={socialLinks} />
        </>
    );
}



    