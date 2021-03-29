import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';

import {logout} from './api/data.js'
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {catalogPage} from "./views/catalog.js";


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click',async ()=>{
    await logout()
    setUserNav()
    page.redirect('/')
})

page('/', middle, homePage);
page('/login', middle, loginPage);
page('/register', middle, registerPage);
page('/catalog', middle, catalogPage);


setUserNav();
page.start();

function middle(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        [...document.querySelectorAll('nav a.user')].forEach(a => a.style.display = 'inline-blog');
        [...document.querySelectorAll('nav a.guest')].forEach(a => a.style.display = 'none')

    } else {
        [...document.querySelectorAll('nav a.user')].forEach(a => a.style.display = 'none');
        [...document.querySelectorAll('nav a.guest')].forEach(a => a.style.display = 'inline-blog')

    }
}