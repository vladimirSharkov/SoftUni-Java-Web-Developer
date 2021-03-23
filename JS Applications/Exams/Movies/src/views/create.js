import {html} from '../../node_modules/lit-html/lit-html.js';
import {createMovie} from '../api/data.js';

const createTemplate = (onSubmit) =>html`
    <section id="add-movie">
        <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" value="">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </section>`;


export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const title = formData.get('title')
        const description = formData.get('description')
        const imageUrl = formData.get('imageUrl')

        const movie = {title, description, imageUrl};

        await createMovie(movie);
        ctx.setUserNav();
        ctx.page.redirect('/')
    }
}