import {e} from './dom.js'


async function getLikesByMovieId(id) {
    const response = await fetch(`/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await response.json();

    return data;
}

async function getOwnLikesByMovieId(id) {
    const userId = sessionStorage.getItem('userId')
    const response = await fetch(`/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22 (`);
    const data = await response.json();

    return data;
}

async function getMovieById(id) {

    const response = await fetch("http://localhost:3030/data/movies/" + id);
    const data = await response.json();

    return data;
}

function creatMovieCard(movie, likes, onwLikes) {


    const controls =
        e('div', {className: 'col-md-4 text-center'},
            e('h3', {className: 'my-3'}, 'Movie Description'),
            e('p', {}, movie.description),);

    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        if (userId === movie._ownerId) {
            controls.appendChild(e('a', {className: 'btn btn-danger', href: '#'}, 'Delete'));
            controls.appendChild(e('a', {className: 'btn btn-warning', href: '#'}, 'Edit'));

        } else {
            controls.appendChild(e('a', {className: 'btn btn-primary', href: '#', onClick: likeMovie}, 'Like'));

        }
    }
    controls.appendChild(e('span', {className: 'enrolled-span'}, likes + `like` + (likes === 1 ? '' : 's')));


    const element = document.createElement("div");
    element.className = "container";

    element.appendChild(e('div', {className: 'row bg-light text-dark'},
        e('h1', {}, `Movie title: ${movie.title}`),
        e('div', {className: 'col-md-8'},
            e('img', {className: 'img-thumbnail', src: movie.img, alt: 'Movie'}))
        , controls
        )
    );

    return element;


    async function likeMovie(event) {

        const response = await fetch('http://localhost:3030/data/likes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify({movieId: movie._id})
        });
        if (response.ok) {
            event.target.remove()
        }
    }
}

let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = "";
    main.innerHTML = "";
    main.appendChild(section);

    const [movie, likes, onwLikes] = await Promise.all([getMovieById(id), getLikesByMovieId(id), getOwnLikesByMovieId(id)])
    const cardMovie = creatMovieCard(movie, likes, onwLikes);
    section.appendChild(cardMovie);
}
