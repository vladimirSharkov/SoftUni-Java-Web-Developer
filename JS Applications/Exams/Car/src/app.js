import {logout} from './api/data.js'
import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {myPage} from "./views/myCatalog.js";


const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout()
    setUserNav();
    page.redirect()
})

page('/', middle, homePage)
page('/login', middle, loginPage)
page('/register', middle, registerPage)
page('/catalog', middle, catalogPage)
page('/create', middle, createPage)
page('/details/:id', middle, detailsPage)
page('/edit/:id', middle, editPage)
page('/myPage', middle, myPage)





setUserNav();
page.start();


function middle(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}


function setUserNav() {
    const username = sessionStorage.getItem('username')
    if (username != null) {
        document.querySelector('#profile> a').textContent = `Welcome ${username}`
        document.getElementById('profile').style.display = ''
        document.getElementById('guest').style.display = 'none'

    } else {
        document.getElementById('profile').style.display = 'none'
        document.getElementById('guest').style.display = ''
    }
}