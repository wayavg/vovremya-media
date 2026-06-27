import React from "react";

import A_Button from "./A_Button.jsx";

import cloudFirst from '../images/main/test/cloud-first.png';
import cloudSec from '../images/main/test/cloud-sec.png';
import cloudThird from '../images/main/test/cloud-third.png';

export default function T_IndexTests() {

    return (
        <div className="test-index grid-auto-fit container">
            <h2>Тесты</h2>
            <h3>Не знаешь, с чего начать разбираться в тайм-менеджменте?</h3>

            <section className="test-index__clouds grid-auto-fit">
                <div className="cloud cloud-first">
                    <p className="title-6">выбери тест</p>
                    <img src={cloudFirst} alt="" className="image-cloud" />
                </div>

                <div className="cloud cloud-sec">
                    <p className="title-6">реши его</p>
                    <img src={cloudSec} alt="" className="image-cloud" />
                </div>

                <div className="cloud cloud-third">
                    <p className="title-6">получи подборку статей</p>
                    <img src={cloudThird} alt="" className="image-cloud" />
                </div>
            </section>

            <A_Button
                type={'a'}
                link={'tests.html'}
                classprop={'test-index__link primary-button'}
                text={'перейти ко всем тестам'}
            />
        </div>
    );
}
