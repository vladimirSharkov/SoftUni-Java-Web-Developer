import page from "../node_modules/page/page.mjs";
import {render} from "../node_modules/lit-html/lit-html.js";
import {logout} from "./api/data.js"


import {dashboardPage} from "./views/dashboard.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {myFurniturePage} from "./views/myFurniture.js";

const main = document.querySelector('.container');

page('/',renderMiddleware, dashboardPage);
page('/login',renderMiddleware, loginPage);
page('/register',renderMiddleware, registerPage);
page('/create',renderMiddleware, createPage);
page('/details',renderMiddleware, detailsPage);
page('/edit',renderMiddleware, editPage);
page('/my-furniture',renderMiddleware, myFurniturePage);

setUserNav()
page.start()


document.getElementById('logoutBtn').addEventListener('click',async (event)=>{
    event.preventDefault();
    await logout();
    setUserNav();
    page.redirect('/')
})

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav
    ;
    next();
}


 function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null){
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    }else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}