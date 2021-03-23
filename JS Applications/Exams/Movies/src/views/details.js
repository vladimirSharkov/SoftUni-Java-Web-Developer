import {html} from '../../node_modules/lit-html/lit-html.js';
import {getMovieById,deleteMovie} from '../api/data.js'

const detailsTemplate = (movie, isOwner,onDelete) => html`
    <section id="movie-example">
        <div class="container">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${movie.title}</h1>

                <div class="col-md-8">
                    <img class="img-thumbnail" src="${movie.img}"
                         alt="Movie">
                </div>
                <div class="col-md-4 text-center">
                    <h3 class="my-3 ">Movie Description</h3>
                    <p>${movie.description}</p>
                    ${isOwner ?html`<a class="btn btn-danger" href="javascript:void (0)" @click=${onDelete}>Delete</a>
                            <a class="btn btn-warning" href=${`/edit/${movie._id}`}>Edit</a>
                            <a class="btn btn-primary" href="#">Like</a>
                            <span class="enrolled-span">Liked 1</span>`:
                            html` <a class="btn btn-primary" href="#">Like</a>
                            <span class="enrolled-span">Liked 1</span>`}
                </div>
            </div>
        </div>
    </section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const movie = await getMovieById(id)
    const userId = sessionStorage.getItem('userId')
    ctx.render(detailsTemplate(movie, movie._ownerId === userId,onDelete));

    async function onDelete(ev) {
        ev.preventDefault();
        console.log('del')
        const confirmed = confirm('Are you sure?')
        if (confirmed) {
            await deleteMovie(ctx.params.id);
            ctx.page.redirect('/')
        }
    }
}