import {html} from "../../node_modules/lit-html/lit-html.js"
import {getItems} from '../api/data.js';


const dashboardTemplate = (data) => html`
    <div id="dashboard-holder">
        ${data.map(itemTemplate)}
    </div>`;

const itemTemplate = (item) => html`
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
            <p class="card-text">${item.title}</p>
        </div>
        <img class="card-image" src=${item.img} alt="Card image cap">
        <a class="btn" href=${`/details/${item._id}`}>Details</a>
    </div>`;

export async function dashboardPage(ctx) {
    const data = await getItems()
    ctx.render(dashboardTemplate(data))
    ctx.setUserNav()
}