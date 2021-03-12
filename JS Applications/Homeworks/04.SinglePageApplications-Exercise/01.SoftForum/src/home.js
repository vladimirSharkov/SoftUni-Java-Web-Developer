import {e} from './dom.js'


async function getPost() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    return await response.json();
}

async function createPost(post) {
    const result =
        e('div',{className:'topic-container'},
            e('div',{className:'topic-name-wrapper'},
                e('div',{className:'topic-name'},
                    e('a',{className:'normal',href:'#'},
                        e('h2',{},post.topicName)),
                    e('div',{className:'columns'},
                        e('div',{},
                            e('p',{},`Date: ${post.date}`),
                            e('div',{className:'nick-name'},
                                e('p',{},'Username: ',
                                    e('span',{},post.username)),
                                ),
                            ),
                        e('div',{className:'subscribers'},
                            e('button',{className:'subscribe'},'Subscribe'),
                            e('p',{},'Subscribers',
                                e('span',{},'0')))))));

    result.querySelector('.normal').addEventListener('click',)
    return result;
}


let main;
let section;

export function setupForum(mainTarget, sectionTarget) {
    main=mainTarget;
    section=sectionTarget;


}

export async function showForum() {
    main.innerHTML='';
    main.appendChild(section)
}


