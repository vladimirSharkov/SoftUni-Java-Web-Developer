async function getRecipes() {
    const response = await fetch(' http://localhost:3030/jsonstore/cookbook/recipes');
    const recipes = response.json();

    return Object.values(recipes);
}

async function getRecipesById(id) {
    const response=  await fetch('http://localhost:3030/jsonstore/cookbook/details/'+id)
    const recipe = response.json();

    return recipe;
}

function createRecipePreview(recipe) {
    const result = e('article',{className:'preview'},
        e('div',{className:'title'},e('h2',{},recipe.name)),
        e('div',{className:'small'},e('img',{src:recipe.img})));

    return result;
}

window.addEventListener('load',async ()=>{
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.textContent = '';
    cards.forEach(c=>main.appendChild(c))
})



export function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}