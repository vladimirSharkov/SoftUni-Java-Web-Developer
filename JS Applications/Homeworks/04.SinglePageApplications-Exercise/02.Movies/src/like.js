let main;
let section;

export function setupLike(mainTarget, sectionTarget) {
    main=mainTarget;
    section=sectionTarget;
}

export async function showLike(){
    main.innerHTML = '';
    main.appendChild(section);
}