
const main = document.querySelector('main');

setupSection()


function setupSection(sectionId, setup) {
    const section = document.querySelector(sectionId);
    setup(main,section)
}