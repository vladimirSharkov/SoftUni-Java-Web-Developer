import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import {logout} from './api/data.js'

import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {browsePage} from "./views/browse.js";

const main = document.querySelector('main');

page('/', renderMiddleware, homePage);
page('/index.html', renderMiddleware, homePage);
page('/login', renderMiddleware, loginPage);
page('/register', renderMiddleware, registerPage);
page('/browse', renderMiddleware, browsePage);



document.getElementById('logoutBtn').addEventListener('click', async ()=>{
    await logout();
    setUserNav();
    page.redirect('/')
})


setUserNav()
page.start()


function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        [...document.querySelectorAll('nav > a.user')].forEach(a => a.style.display = 'block');
        [...document.querySelectorAll('nav > a.guest')].forEach(a => a.style.display = 'none');
    } else {
        [...document.querySelectorAll('nav > a.user')].forEach(a => a.style.display = 'none');
        [...document.querySelectorAll('nav > a.guest')].forEach(a => a.style.display = 'block');
    }
}