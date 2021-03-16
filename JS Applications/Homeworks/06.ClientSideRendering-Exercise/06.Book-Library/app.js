import {render} from './node_modules/lit-html/lit-html.js'
import * as api from './data.js'
import {layoutTemplate} from './main.js'

const onSubmit = {
    'add-form': onCreate,
    'edit-form': onEdit
}

const ctx = {
    list: [],
    async load() {
        ctx.list = await api.getAllBook()
        update()
    },
    onEdit(id) {
        const book = ctx.list.find(b => b._id === id)
        update(book)
    },
    async onDelete(id) {
        const confirmed = confirm("Are you sure?");
        if (confirmed){
            await api.deleteBook(id);
        }
    }
}


document.body.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(onSubmit[event.target.id])
    onSubmit[event.target.id](formData, event.target)
})

start()

async function start() {
    update([])
}

function update(bookToEdit) {
    const result = layoutTemplate(ctx, bookToEdit);
    render(result, document.body)
}

async function onCreate(formData, form) {
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.createBook(book)
    form.reset();
}

async function onEdit(formData, form) {
    const id = formData.get('_id')
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.updateBook(id, book);
}

