export function setupHome(section,navigation) {
    section.querySelector('a').addEventListener('click',event=>{
        event.preventDefault();
        navigation.goTo('dashboard')
    })

    return showHome;

    async function showHome() {
        return section
    }
}
