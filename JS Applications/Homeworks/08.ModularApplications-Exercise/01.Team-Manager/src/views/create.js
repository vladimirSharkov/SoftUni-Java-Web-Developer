import {html} from '../../node_modules/lit-html/lit-html.js';
import {createTeam} from '../api/data.js'

const createTemplate = (onSubmit, errorMsg) => html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form @submit=${onSubmit} id="create-form" class="main-form pad-large">
                ${errorMsg ? html`
                    <div class="error">${errorMsg}</div>` : ''}
                <label>Team name: <input type="text" name="name"></label>
                <label>Logo URL: <input type="text" name="logoUrl"></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team">
            </form>
        </article>
    </section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const logo = formData.get('logoUrl')
        const description = formData.get('description')
        const team = {name, logo, description}

        try {
            const newTeam = await createTeam(team);
            ctx.setUserNav();
            event.target.reset()
            ctx.page.redirect('/details/' + newTeam._id)
        } catch (err) {
            ctx.render(createTemplate(onSubmit, err.message));
        }
    }
}