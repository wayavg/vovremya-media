import React from "react";

import formPic from '../images/main/form/form-pic.png';

export default function T_IndexForm() {

    return (
        <div className="form-index">
            <div className="form-index__container container">
                <div className="form-index__content">
                    <h2>Держи руку на пульсе, подписывайся<br />на обновления!</h2>
                    <form action="https://formspree.io/f/mjkaldlz" method="POST">
                        <label>
                            <input className="form-index__label" type="email" name="email" placeholder="e-mail" />
                        </label>
                        <button type="submit" className="primary-button">Подписаться</button>
                    </form>
                </div>
                <div className="qr">
                    <img src={formPic} alt="" />
                </div>
            </div>
        </div>
    );
}
