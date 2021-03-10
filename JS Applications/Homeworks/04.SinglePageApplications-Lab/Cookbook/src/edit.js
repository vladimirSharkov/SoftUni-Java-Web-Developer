

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    return await response.json();
}


function onSubmit(data) {

}


let main;
let section;
let setActiveNav

export function setupEdit(mainTarget, sectionTarget, setActiveNavCb) {
    main = mainTarget;
    section = sectionTarget;
    setActiveNav = setActiveNavCb;


    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, {[k]: v}), {}));
    }));
}

export async function showEdit(id) {
    setActiveNav()
    main.innerHTML = '';
    main.appendChild(section);
    const recipe = await getRecipeById(id)

    section.querySelector('[name="id"]').value = id;
    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}