import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import {logout} from './api/data.js'


import {loginPage} from "./views/login.js";
import {homePage} from "./views/home.js";
import {dashboardPage} from './views/dashboard.js'
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {registerPage} from "./views/register.js";

const main = document.querySelector('.container-main');

page('/', renderMiddleware, homePage);
page('/home', renderMiddleware, homePage);
page('/login', renderMiddleware, loginPage);
page('/dashboard', renderMiddleware, dashboardPage);
page('/create', renderMiddleware, createPage);
page('/details/:id', renderMiddleware, detailsPage);
page('/register', renderMiddleware, registerPage);


document.getElementById('logoutBtn').addEventListener('click', async (ev) => {
    debugger
    await logout();
    setUserNav();
    page.redirect('/dashboard')
});

page.start()


function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}


function setUserNav() {
    const tokens = sessionStorage.getItem('userId');
    if (tokens != null) {
        [...document.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'list-item');
        [...document.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'none');

    } else {
        [...document.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'none');
        [...document.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'list-item');
    }
}
