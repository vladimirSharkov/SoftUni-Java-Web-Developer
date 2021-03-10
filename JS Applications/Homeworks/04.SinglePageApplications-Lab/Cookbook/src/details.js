import {e} from "./dom.js";
import {showEdit} from './edit.js'



async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    return await response.json();
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', {className: 'band'},
            e('div', {className: 'thumb'}, e('img', {src: recipe.img})),
            e('div', {className: 'ingredients'},
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', {className: 'description'},
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s)),
            e('div',{className:'controls'},
            e('button',{onClick:()=>showEdit(recipe._id)},'Edit'),
            e('button',{onClick:onDelete},'Delete')
        ))
    );

    return result;
}

let main;
let section;
let setActiveNav;

export function setupDetails(mainTarget, sectionTarget,setActiveNavCb) {
    main = mainTarget;
    section = sectionTarget;
    setActiveNav = setActiveNavCb;
}

export async function showDetails(id) {
    setActiveNav();
    section.innerHTML ='';
    main.innerHTML = '';
    main.appendChild(section)

    const recipe = await getRecipeById(id);
    const cards = createRecipeCard(recipe);

    cards.forEach(c => section.appendChild(c));
}