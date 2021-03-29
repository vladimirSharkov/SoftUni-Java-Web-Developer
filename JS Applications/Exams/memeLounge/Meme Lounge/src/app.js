import page from "../node_modules/page/page.mjs";
import {render} from "../node_modules/lit-html/lit-html.js";

import {logout} from '../src/api/data.js'
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {createPage} from "./views/create.js";
import {homePage} from "./views/home.js";
import {allMemesPage} from "./views/allMemes.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {myPage} from "./views/myProfile.js";

const main = document.querySelector('main');

page('/', middle, homePage);
page('/allMemes', middle, allMemesPage);
page('/login', middle, loginPage);
page('/register', middle, registerPage);
page('/create', middle, createPage);
page('/details/:id', middle, detailsPage);
page('/edit/:id', middle, editPage);
page('/myProfile', middle, myPage);


document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout()
    setUserNav();
    page.redirect('/')
})

setUserNav();
page.start();

function middle(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        document.querySelector('.user span').textContent= `Welcome, ${email}`;
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }
}

