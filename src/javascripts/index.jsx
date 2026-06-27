import React from "react";
import { createRoot } from "react-dom/client";

import tgIcon from '../images/icons/social/tg-social.svg';
import vkIcon from '../images/icons/social/vk-social.svg';

const basePath = '/vovremya-media';
const bp = (path) => basePath + path;

const headerLinks = [
    { title: 'Статьи', link: bp('/articles.html') },
    { title: 'Тесты', link: bp('/tests.html') },
    { title: 'Чек-листы', link: bp('/checklists.html') },
    { title: 'Книги', link: bp('/resources/books.html') },
    { title: 'Фильмы', link: bp('/resources/movies.html') },
    { title: 'Блогеры', link: bp('/resources/reels.html') },
]

const footerLinks = [
    { title: 'Статьи', link: bp('/articles.html') },
    { title: 'Тесты', link: bp('/tests.html') },
    { title: 'Чек-листы', link: bp('/checklists.html') },
    { title: 'Ресурсы', link: bp('/resources.html') },
    { title: 'О сервисе', link: bp('/about.html') },
    { title: 'Стайлгайд', link: bp('/styleguide.html') },
]

const socialLinks = [
    {
        'title': 'Telegram',
        'link': 'https://t.me/+ep2NlSh7FLwwODYy',
        'image': tgIcon
    },
    {
        'title': 'VK',
        'link': 'https://t.me/+ep2NlSh7FLwwODYy',
        'image': vkIcon
    },
]

import P_Error404 from '../components/P_Error404.jsx';
import P_Main from '../components/P_Main.jsx'
import P_Books from "../components/P_Books.jsx";
import P_Tests from "../components/P_Tests.jsx";
import P_Article from "../components/P_Article.jsx";
import P_Articles from "../components/P_Articles.jsx";
import P_ChecklistEmergency from "../components/P_ChecklistEmergency.jsx";
import P_ChecklistExamPrep from "../components/P_ChecklistExamPrep.jsx";
import P_ChecklistFastNotes from "../components/P_ChecklistFastNotes.jsx";
import P_ChecklistGroupProject from "../components/P_ChecklistGroupProject.jsx";
import P_ChecklistDeadlinePlan from "../components/P_ChecklistDeadlinePlan.jsx";
import P_ChecklistBreakingDown from "../components/P_ChecklistBreakingDown.jsx";
import P_ChecklistSixSteps from "../components/P_ChecklistSixSteps.jsx";
import P_Test from "../components/P_Test.jsx";
import P_Checklists from "../components/P_Checklists.jsx";
import P_Movies from "../components/P_Movies.jsx";
import P_Reels from "../components/P_Reels.jsx";
import P_About from "../components/P_About.jsx";
import P_Styleguide from "../components/P_Styleguide.jsx";

const routes = {
    '/': P_Main,
    '/index.html': P_Main,
    '/articles.html': P_Articles,
    '/about.html': P_About,
    '/checklists.html': P_Checklists,
    '/resources/books.html': P_Books,
    '/resources/movies.html': P_Movies,
    '/resources/reels.html': P_Reels,
    '/tests.html': P_Tests,
    '/checklists/time-management-emergency.html': P_ChecklistEmergency,
    '/checklists/exam-prep-plan.html': P_ChecklistExamPrep,
    '/checklists/fast-note-taking-methods.html': P_ChecklistFastNotes,
    '/checklists/group-project-management.html': P_ChecklistGroupProject,
    '/checklists/emergency-deadline-plan.html': P_ChecklistDeadlinePlan,
    '/checklists/breaking-down-study-projects.html': P_ChecklistBreakingDown,
    '/checklists/six-steps-to-simple-student-life.html': P_ChecklistSixSteps,
    '/styleguide.html': P_Styleguide,
}

const App = () => {
    let {pathname} = window.location;

    if (pathname.startsWith(basePath)) {
        pathname = pathname.slice(basePath.length) || '/';
    }

    console.log("Текущий pathname в браузере:", pathname);

    let PageCompoment = routes[pathname] || P_Error404;

    if (pathname.startsWith('/articles/') && pathname.endsWith('.html')) {
        PageCompoment = P_Article;
    }

    if (pathname.startsWith('/tests/') && pathname.endsWith('.html')) {
        PageCompoment = P_Test;
    }

    return (
    <PageCompoment
        headerLinks = {headerLinks}
        footerLinks = {footerLinks}
        socialLinks = {socialLinks}
    />)
}

const app = document.querySelector('#app');

if (app) {
    const root = createRoot(app)
    root.render(<App />)
}