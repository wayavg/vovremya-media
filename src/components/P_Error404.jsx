import React from "react";

// import M_Header from '../components/M_Header.jsx'
import O_Footer from '../components/O_Footer.jsx'

export default function P_Error404 (
    {
        menuLinks,
        socialLinks
    }
) {
    return (
        <>
            {/* <M_Header menuLinks={menuLinks}/> */}

            <section className="section-goal" id="цель">
                <div className="goal-inner">
                    <h2 className="goal-heading">404 ошибка</h2>
                </div>
            </section>

            <O_Footer menuLinks={menuLinks} socialLinks={socialLinks}/>
        </>
    )
}