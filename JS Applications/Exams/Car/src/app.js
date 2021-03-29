import {logout} from './api/data.js'





const main = document;
document.getElementById().addEventListener('click', async () => {
    await logout()
    setUserNav();
    page.redirect()
})


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