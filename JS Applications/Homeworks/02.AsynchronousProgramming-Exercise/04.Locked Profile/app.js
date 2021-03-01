function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.querySelector('main');
    window.addEventListener('load', getProfile)


    async function getProfile() {
        const response = await fetch(url);
        const date = await response.json();

        Object.values(date).forEach(value => {
            const div = document.querySelector('div[class="profile"]');

            document.querySelector('input[type="text"]').value = value.username;
            document.querySelector('input[type="email"]').value = value.email;
            document.querySelectorAll('input[type="email"]')[1].value = value.age;


            const cope = div.cloneNode(true);
            main.appendChild(cope)

        })
        main.lastChild.remove()

        let btns = document.querySelectorAll('button');

        console.log(btns)
        Array.from(btns).forEach(btn => {
            btn.addEventListener('click', (ev) => {
                const btn = ev.target;

                if (btn.nodeName === 'BUTTON') {
                    if (btn.parentNode.querySelectorAll('input')[1].checked === true) {
                        if (btn.textContent === 'Show more') {
                            btn.parentNode.querySelectorAll('div')[0].style.display = 'inline-block'
                            btn.textContent = 'Hide it'
                        } else {
                            btn.parentNode.querySelectorAll('div')[0].style.display = 'none'
                            btn.textContent = 'Show more'
                        }
                    }
                }
            })


        })
    }


}