import {getIdeaById, deleteIdea} from '../api/data.js'
import {e} from '../dom.js'

function creatIdeaCard(idea, isOwner,goTo) {
    const result = document.createDocumentFragment();
    result.appendChild(e('img', {className: 'det-img', src: idea.img}));
    result.appendChild(e('div', {className: 'desc'},
        e('h2', {className: 'display-5'}, idea.title),
        e('p', {className: 'infoType'}, 'Description:'),
        e('p', {className: 'idea-description'}, idea.description)));

    if (isOwner) {
        result.appendChild(e('div', {className: 'text-center'},
            e('a', {className: 'btn detb', href: "", onClick: onDelete}, 'Delete')))
    }
    return result

    async function onDelete(ev) {
        ev.preventDefault();
        const confirmed = confirm("Are sure?");
        if (confirmed) {
            await deleteIdea(idea._id)
            goTo('dashboard')
        }
    }
}

export function setupDetails(section, navigation) {
    return showDetails;

    async function showDetails(id) {
        section.innerHTML = '';
        const idea = await getIdeaById(id);

        const userId = sessionStorage.getItem('userId');


        const card = creatIdeaCard(idea, userId === idea._ownerId, navigation.goTo);
        section.appendChild(card)
        return section
    }
}