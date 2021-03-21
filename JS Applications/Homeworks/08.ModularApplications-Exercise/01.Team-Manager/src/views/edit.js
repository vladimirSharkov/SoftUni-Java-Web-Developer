import {html} from '../../node_modules/lit-html/lit-html.js';
import {editTeam, getTeamById} from '../api/data.js'

const editTemplate = (team, onSubmit, errorMsg) => html`
    <section id="edit">
        <article class="narrow">
            <header class="pad-med">
                <h1>Edit Team</h1>
            </header>
            <form @submit=${onSubmit} id="edit-form" class="main-form pad-large">
                ${errorMsg ? html`
                    <div class="error">${errorMsg}</div>` : ''}
                <label>Team name: <input type="text" name="name" .value=${team.name}></label>
                <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
                <label>Description: <textarea name="description" .value=${team.description}></textarea></label>
                <input class="action cta" type="submit" value="Save Changes">
            </form>
        </article>
    </section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const team = await getTeamById(id)
    ctx.render(editTemplate(team, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name')
        const logoUrl = formData.get('logoUrl')
        const description = formData.get('description')

        const editForm = {name, logoUrl, description};
        const id = ctx.params.id;

        try {
            await editTeam(id, editForm);
            ctx.setUserNav();
            event.target.reset()
            ctx.page.redirect('/details/' + editForm._id)
        } catch (err) {
            ctx.render(team, onSubmit, err.message)
        }
    }
}