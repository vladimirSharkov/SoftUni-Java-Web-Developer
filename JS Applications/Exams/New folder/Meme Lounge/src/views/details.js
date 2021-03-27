import {html} from '../../node_modules/lit-html/lit-html.js';
import {getItemById,deleteItem} from '../api/data.js';

const detailsTemplate = (item,isOwner,onDelete) =>html`
    <section id="meme-details">
        <h1>Meme Title: ${item.title}

        </h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src="${item.imageUrl}">
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>
                   ${item.description}
                </p>
                    ${isOwner ?html`<a class="button warning" href=${`/edit/${item._id}`}>Edit</a>
                            <button @click=${onDelete} class="button danger">Delete</button>`:''}
            </div>
        </div>
    </section>`;

export async function detailsPage(ctx) {

    const itemId = ctx.params.id;
    const item = await getItemById(itemId);
    const userId = sessionStorage.getItem('userId')
    ctx.render(detailsTemplate(item,userId===item._ownerId,onDelete));

    async function onDelete() {
        await deleteItem(itemId)
        ctx.page.redirect('/allMemes')
    }
}