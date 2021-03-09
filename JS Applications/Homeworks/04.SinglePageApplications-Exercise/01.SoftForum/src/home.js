

let main;
let section;

function setupHome(mainTarget, sectionTarget) {
    main=mainTarget;
    section=sectionTarget;
}

async function showHome() {
    main.innerHTML='';
    main.appendChild(section)
}