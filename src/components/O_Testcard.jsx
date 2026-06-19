import React from 'react';

import ImageCard from '../images/card-article/ilustrating-card-11.png'

export default function O_Testcard() {
    return (
        <article class="test-card">
            <a href="tests/test1.html">
                <div class="test-card__image">
                    <img src={ImageCard} alt="" />
                </div>
                <div class="test-card__content">
                    <p className='title-2'>Тест: «Твой дедлайн — это срок или срок годности?»</p>
                    <p className="large-text">Чувствуешь, как время тает, а задача всё ещё маячит на горизонте? Этот тест — твой шанс выяснить, как ты на самом деле относишься к этим зловещим датам!</p>
                    <span class="primary-button">начать тест</span>
                </div>
            </a>
        </article>
    )
}