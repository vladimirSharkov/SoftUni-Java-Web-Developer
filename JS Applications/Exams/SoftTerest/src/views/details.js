import {html} from '../../node_modules/lit-html/lit-html.js';
import {getItemById,deleteItem} from '../api/data.js'

const detailsTemplate = (item, isOwner, onDelete) => html`
    <div class="container home some">
        <img class="det-img" src="${item.img}"/>
        <div class="desc">
            <h2 class="display-5">${item.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${item.description}</p>
        </div>
        ${isOwner ? html`
            <div class="text-center">
                <a @click=${onDelete} class="btn detb" href="javascript:void(0)">Delete</a>
            </div>` : ''}
    </div>`

export async function detailsPage(ctx) {
    const id = ctx.params.id
    const item = await getItemById(id)
    const userId = sessionStorage.getItem('userId')
    ctx.render(detailsTemplate(item, userId === item._ownerId, onDelete));

    async function onDelete(event) {
        event.preventDefault();
        const confirmed = confirm('Are you sure?');

        if (confirmed){
            await deleteItem(id);
            ctx.page.redirect('/dashboard')
        }
    }
}