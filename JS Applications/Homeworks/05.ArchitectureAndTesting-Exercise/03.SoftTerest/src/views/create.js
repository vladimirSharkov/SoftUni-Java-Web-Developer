import {createIdea} from '../api/data.js'

export function setupCreate(section, navigation) {
    debugger
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit)

    return showCreate;

    async function showCreate() {
        return section
    }

    async function onSubmit(event) {
        event.preventDefault();


        const formData = new FormData(form);

        const idea = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageURl')
        };

        if (idea.title.length < 6) {
            return alert('Idea title must be 6')
        }
        if (idea.description.length < 10) {
            return alert('Idea title must be 10')
        }
        if (idea.img.length < 5) {
            return alert('Idea title must be 5')
        }

        await createIdea(idea);
        await navigation.goTo('dashboard')
    }
}