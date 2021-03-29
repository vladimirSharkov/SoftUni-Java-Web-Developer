import {register} from '../api/data.js'


const registerTemplate = (onSubmit) =>html``;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
    }
}