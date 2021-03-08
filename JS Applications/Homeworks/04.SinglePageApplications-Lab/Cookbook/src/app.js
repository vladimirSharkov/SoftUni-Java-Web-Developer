import {showCatalog, setupCatalog} from './catalog.js'
import {setupLogin, showLogin} from "./login.js";

main()

function main() {
    setUserNav();

    const main = document.querySelector('main');
    const catalogSection = document.getElementById('catalogSection');
    const loginSection = document.getElementById('loginSection');

    setupCatalog(main, catalogSection);
    setupLogin(main, loginSection,()=>{setUserNav();showCatalog()})

    const links = {
        'catalogLink': showCatalog,
        'loginLink': showLogin
    }

    setupNavigation();

    showCatalog();


    function setupNavigation() {
        document.querySelector('nav').addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const view = links[event.target.id]
                console.log(event.target.id)
                if (typeof view === 'function') {
                    event.preventDefault();
                    view();
                }
            }
        })
    }
}

function setUserNav() {
    if (sessionStorage.getItem('authToken') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('logoutBtn').addEventListener('click', logout);
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.getItem('authToken')
        },
    });
    if (response.status === 200) {
        sessionStorage.removeItem('authToken');
        window.location.pathname = 'index.html';
    } else {
        console.error(await response.json());
    }
}


