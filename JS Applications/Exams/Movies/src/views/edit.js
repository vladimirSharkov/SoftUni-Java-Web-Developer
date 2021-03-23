import {html} from '../../node_modules/lit-html/lit-html.js';
import {editMovie, getMovieById} from '../api/data.js';

const editTemplate = (movie, onSubmit) => html`
    <section id="edit-movie">
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
            <h1>Edit Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Movie Title" .value=${movie.title} name="title">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Movie Description..." name="description"
                          .value=${movie.description}></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" .value=${movie.img} name="imageUrl">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const movie = await getMovieById(id)
    ctx.render(editTemplate(movie, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const title = formData.get('title')
        const description = formData.get('description')
        const imageUrl = formData.get('imageUrl')

        const movie1 = {title, description, imageUrl}
        await editMovie(id, movie1);
        ctx.setUserNav();
        ctx.page.redirect(`/details/${movie._id}`)
    }
}