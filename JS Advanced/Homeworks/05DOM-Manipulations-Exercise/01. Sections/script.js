function create(words) {
    const div = document.getElementById('content');
    words.forEach(word => {
        const divElement = document.createElement('div');
        const pElement = document.createElement('p');
        divElement.addEventListener('click', onClick);
        pElement.textContent = word;
        pElement.style.display = 'none'
        divElement.appendChild(pElement)

        function onClick(e) {
            let childNodes = e.target.childNodes;
            childNodes[0].style.display = 'block'
        }
        div.appendChild(divElement);
    })

}