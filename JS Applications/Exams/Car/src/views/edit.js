

const editTemplate = (onSubmit) =>html``;

export async function editPage(ctx) {
    ctx.render(editTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
    }
}