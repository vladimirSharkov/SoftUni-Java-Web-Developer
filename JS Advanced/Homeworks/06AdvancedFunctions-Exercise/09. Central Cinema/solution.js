function solve() {
    const divContainer = document.querySelectorAll('#container input');
    const name = divContainer[0];
    const hall = divContainer[1];
    const price = divContainer[2];
    const btnScreen = document.querySelector('#container button');

    const selectMovie = document.querySelector('#movies>ul');
    const selectArchive = document.querySelector('#archive>ul')
    const btnClear = document.querySelector('#archive>button');
    console.log(btnClear)


    function clear(ev) {
        let children = selectArchive.children
       Array.from(children).forEach(ch=>ch.remove())
    }
    function archive(ev) {
        let parent = ev.target.parentNode.parentNode;
        const moviePrice = ev.target.parentNode.firstChild;
        const movieName = ev.target.parentNode.parentNode.firstChild;
        const movieCountInput = ev.target.parentNode.children[1].value;

        if (!Number(movieCountInput)){
            return
        }


        const liArchive = document.createElement('li');

        const spanArchive = document.createElement('span');
        spanArchive.textContent = movieName.textContent;

        const strongArchive = document.createElement('strong');
        const total = Number(moviePrice.textContent)*Number(movieCountInput)
        strongArchive.textContent = `Total amount: ${total.toFixed(2)}`;

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';

        btnDelete.addEventListener('click', () => {
            liArchive.remove()
        })

        liArchive.appendChild(spanArchive);
        liArchive.appendChild(strongArchive);
        liArchive.appendChild(btnDelete);

        selectArchive.appendChild(liArchive);


        parent.remove()
    }

    function onScreen(ev) {
        ev.preventDefault()
        if (!name.value || !hall.value || !Number(price.value)) {
            return
        }

        const liElement = document.createElement('li');

        const spanElement = document.createElement('span');
        spanElement.textContent = name.value;

        const strongElement = document.createElement('strong');
        strongElement.textContent = `Hall: ${hall.value}`;

        const divElement = document.createElement('div');

        const priceStrongElement = document.createElement('strong');
        priceStrongElement.textContent = Number(price.value).toFixed(2);

        const inputElement = document.createElement('input');
        inputElement.placeholder = 'Tickets Sold';

        const btnArchiveElement = document.createElement('button');
        btnArchiveElement.textContent = 'Archive';

        btnArchiveElement.addEventListener('click', archive);


        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(divElement);
        divElement.appendChild(priceStrongElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(btnArchiveElement);

        selectMovie.appendChild(liElement);

        name.value = '';
        price.value = '';
        hall.value = '';
    }

    btnClear.addEventListener('click',clear)

    btnScreen.addEventListener('click', onScreen)
}