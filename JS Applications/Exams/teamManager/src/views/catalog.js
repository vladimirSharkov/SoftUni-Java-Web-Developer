import {html} from '../../node_modules/lit-html/lit-html.js';
import {getItems} from '../api/data.js'

const catalogTemplate = (data) =>html`
    <section id="browse">

        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>

        <article class="layout narrow">
            <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
        </article>

     ${data.map(itemTemplate)}
       

    </section>`;

const itemTemplate = (item) =>html`
    <article class="layout">
        <img src="${item.img}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>Minions</h2>
            <p>Friendly neighbourhood jelly beans, helping evil-doers succeed.</p>
            <span class="details">150 Members</span>
            <div><a href="#" class="action">See details</a></div>
        </div>
    </article>`;

export async function catalogPage(ctx) {
     const data = await getItems()

     ctx.render(catalogTemplate(data))
}

