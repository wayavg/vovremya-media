import React from "react";
import { createRoot } from "react-dom/client";

import tgIcon from '../images/icons/social/tg-social.svg';
import vkIcon from '../images/icons/social/vk-social.svg';

const menuLinks = [
    {
        'title': 'Статьи',
        'link': '/articles.html',
    },
    {
        'title': 'Тесты',
        'link': '/tests.html',
    },
    {
        'title': 'Чек-листы',
        'link': '/checklists.html',
    },
    {
        'title': 'Ресурсы',
        'link': '/resources.html',
    },
    {
        'title': 'О сервисе',
        'link': '/about.html',
    },
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
import P_Books from "../components/P_Books.jsx";
import P_Tests from "../components/P_Tests.jsx";

const routes = {
    '/': P_Books,
    '/resources/books.html': P_Books,
    '/tests.html': P_Tests,
}

const App = () => {
    const {pathname} = window.location;

    console.log("Текущий pathname в браузере:", pathname);

    let PageCompoment = routes[pathname] || P_Error404;

    return (
    <PageCompoment 
        menuLinks = {menuLinks}
        socialLinks = {socialLinks}
    />)
}

const app = document.querySelector('#app');
const root = createRoot(app)
root.render(<App />)