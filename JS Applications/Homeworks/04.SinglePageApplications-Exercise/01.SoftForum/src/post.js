import {showForum} from "./home.js";

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('topicName');
    const userName = formData.get('username');
    const post = formData.get('postText');

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: {'Content-Type': 'application.json'},
        body: JSON.stringify({title, userName,post})
    });

    if (response.ok) {
       showForum()
    }
}

let main;
let section;


export function setupPost(mainTarget, sectionTarget) {
    main=mainTarget;
    section=sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit',onSubmit)

}

export async function showPost() {
    main.innerHTML='';
    main.appendChild(section)
}