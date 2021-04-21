import {getItemById, deleteItem} from '../api/data.js'

const detailsTemplate = (item, isOwner, onDelete) => html``;


export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    const userId = sessionStorage.getItem('userId')
    const isOwner = item._ownerId === userId
    ctx.render(detailsTemplate(item, isOwner, onDelete))

    async function onDelete() {
        const confirmed = confirm('Are you sure?')
        if (confirmed) {
            await deleteItem(id);
            ctx.page.redirect('/catalog')
        }
    }
}