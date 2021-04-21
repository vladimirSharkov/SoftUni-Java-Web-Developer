import {getItems} from "../api/data.js";

const catalogTemplate = (data) =>html``;


const itemTemplate= (item)=>html``;



export async function catalogPage(ctx) {
    const data = await getItems()
    ctx.render(catalogTemplate(data))
}