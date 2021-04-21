import {logout} from './api/data.js';
import {} from ''
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {catalogPage} from "./views/catalog.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {createPage} from "./views/create.js";


const main = document;
document.getElementById().addEventListener('click', async () => {
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

function middle(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}


function setUserNav() {
    const userId = sessionStorage.getItem('userId')
    if (userId != null) {

    } else {

    }
}