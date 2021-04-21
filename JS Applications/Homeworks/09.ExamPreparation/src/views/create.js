import {createItem} from '../api/data.js'

const createTemplate = (onSubmit) =>html``;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
    }
}