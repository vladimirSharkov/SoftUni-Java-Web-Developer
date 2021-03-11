import {getMovieById, showDetails} from './details.js'


async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)
    const movieId = formData.get('id');
    const movie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    }
    if (movie.title === '' || movie.description === '' || movie.img === '') {
        return alert('All fields are required!')
    }

    const response = await fetch('http://localhost:3030/data/movies/' + movieId, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(movie)
    });

    if (response.ok) {
        const movie = await response.json();
        showDetails(movie._id)
    } else {
        const error = await response.json();
        alert(error.message);
    }
}

let main;
let section;

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form').addEventListener('submit', onSubmit)
}

export async function showEdit(id) {
    main.innerHTML = '';
    main.appendChild(section);
    const movie = await getMovieById(id);

    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="imageUrl"]').value = movie.img;
    section.querySelector('[name="id"]').value = movie._id;

}
