import {showForum,setupForum} from './home.js'
import {setupPost,showPost} from './post.js'

const main = document.querySelector('main');


setupSection('home',setupForum);
// setupSection('add-post',setupPost())

setupNavigation()
showForum()


function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main,section)
}

function setupNavigation() {
    document.querySelector('nav').addEventListener('click',ev => {
        ev.preventDefault();
        showForum();
    })
}