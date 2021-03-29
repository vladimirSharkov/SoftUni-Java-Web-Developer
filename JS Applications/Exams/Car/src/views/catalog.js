import {getItems} from "../api/data";

const catalogTemplate = (data) =>html``;


export async function catalogPAge(ctx) {
    const data = await getItems()
    ctx.render(catalogTemplate(data))
}