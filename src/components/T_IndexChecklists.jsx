import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import A_Button from "./A_Button.jsx";

import checklistIcon1 from '../images/main/checklist/checklist-icon-1.svg';
import checklistIcon from '../images/main/checklist/icon.svg';
import checklistIcon1Alt from '../images/main/checklist/icon-1.svg';
import checklistIcon2 from '../images/main/checklist/icon-2.svg';
import arrowIcon from '../images/main/checklist/arrow.svg';

const icons = [checklistIcon1, checklistIcon, checklistIcon1Alt, checklistIcon2];

export default function T_IndexChecklists() {

    const [checklists, setChecklists] = useState([]);

    useEffect(() => {
        getData('checklist').then((data) => {
            setChecklists(data.slice(0, 4));
        });
    }, []);

    return (
        <div className="checklists-index__bg">
            <div className="checklists-index__filter">
                <div className="checklists-index">
                    <div className="grid-auto-fit container">
                        <h2>чек-листы</h2>
                        <h3>готовые списки задач для экономии времени</h3>

                        <ol type="1" start="1" className="checklists-index__list">
                            <li>распечатай чек-листы</li>
                            <li>используй их, выполняя таски по шагам</li>
                            <li>управляй своим временем проще</li>
                        </ol>

                        <section className="checklists-index__cards-checklist">
                            {checklists.map((item, index) => (
                                <a href={`/checklists/${item.url}`} key={item.id} className="checklists-index__card-checklist">
                                    <div className="checklists-index__card-checklist__card-content">
                                        <img src={icons[index % icons.length]} className="checklist-icon" alt="" />
                                        <div className="checklist-title">
                                            {item.Name}
                                        </div>
                                    </div>
                                    <img src={arrowIcon} alt="" />
                                </a>
                            ))}
                        </section>

                        <A_Button
                            type={'a'}
                            link={'checklists.html'}
                            classprop={'article-index__link primary-button'}
                            text={'перейти ко всем чек-листам'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
