import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {logout} from './api/data.js'
import {registerPage} from "./views/register.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {createPage} from "./views/create.js";


const main = document.querySelector('main');

page('/', middle, homePage);
page('/login', middle, loginPage);
page('/register', middle, registerPage);
page('/details/:id', middle, detailsPage);
page('/edit/:id', middle, editPage);
page('/create', middle, createPage);

document.getElementById('logoutBtn').addEventListener('click',async ()=>{
    await logout();
    setUserNav();
    page.redirect('/')
})


setUserNav()
page.start()

function middle(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        [...document.querySelectorAll('a.user')].forEach(a => a.style.display = 'inline-block');
        [...document.querySelectorAll('a.guest')].forEach(a => a.style.display = 'none');
    } else {
        [...document.querySelectorAll('a.user')].forEach(a => a.style.display = 'none');
        [...document.querySelectorAll('a.guest')].forEach(a => a.style.display = 'inline-block');
    }
}