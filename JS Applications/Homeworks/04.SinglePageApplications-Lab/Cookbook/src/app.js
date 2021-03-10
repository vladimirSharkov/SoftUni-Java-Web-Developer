import {setupCatalog, showCatalog} from './catalog.js'
import {setupLogin, showLogin} from './login.js'
import {setupRegister, showRegister} from './register.js'
import {setupCreate, showCreate} from './create.js'
import {setupDetails} from './details.js'
import {setupEdit} from './edit.js'

main();

function main() {
    setUserNav()

    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const sectionCatalog = document.getElementById('catalogSection');
    const sectionLogin = document.getElementById('loginSection');
    const sectionRegister = document.getElementById('registerSection');
    const sectionCreate = document.getElementById('createSection');
    const sectionDetails = document.getElementById('detailsSection');
    const sectionEdit = document.getElementById('editSection');

    const links = {
        'catalogLink': showCatalog,
        'loginLink': showLogin,
        'registerLink': showRegister,
        'createLink': showCreate
    }

    setupCatalog(main, sectionCatalog, setActiveNav);
    setupLogin(main, sectionLogin, setActiveNav);
    setupRegister(main, sectionRegister, setActiveNav);
    setupCreate(main, sectionCreate, setActiveNav);
    setupDetails(main, sectionDetails, setActiveNav)
    setupEdit(main,sectionEdit,setActiveNav)

    setupNavigation();

    showCatalog();

    function setActiveNav(targetId) {
        [...nav.querySelectorAll('a')].forEach(l => {
            if (l.id === targetId) {
                l.classList.add('active')
            } else {
                l.classList.remove('active')
            }
        });
    }

    function setupNavigation() {
        document.getElementById('logoutBtn').addEventListener('click', logout);
        nav.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const view = links[event.target.id];
                if (typeof view === 'function') {
                    event.preventDefault();
                    view();
                }
            }
        });
    }

    function setUserNav() {
        if (sessionStorage.getItem('authToken') != null) {
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
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
            setUserNav();
            showCatalog();
        } else {
            console.error(await response.json());
        }
    }
}


