function lockedProfile() {
    const main = document.getElementById('main');

    main.addEventListener('click', (ev) => {
        const btn = ev.target;

        if (btn.nodeName === 'BUTTON') {
            if (btn.parentNode.querySelectorAll('input')[1].checked === true) {
                if (btn.textContent==='Show more'){
                    btn.parentNode.querySelectorAll('div')[0].style.display = 'inline-block'
                    btn.textContent = 'Hide it'
                }else{
                    btn.parentNode.querySelectorAll('div')[0].style.display = 'none'
                    btn.textContent = 'Show more'
                }
            }
        }
    })
}