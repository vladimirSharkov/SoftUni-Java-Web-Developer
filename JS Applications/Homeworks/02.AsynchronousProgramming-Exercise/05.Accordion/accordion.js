function solution() {
    const main = document.querySelector('#main');
    window.addEventListener('load', getTitles);

    async function getArticleById() {
        let par = document.querySelector('button').id;
        getTitles(par)
    }

    async function getTitles(id) {
        const urlArt = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';


        const [responseTitle,response]=await Promise.all([
            fetch(url),
            fetch(urlArt)
        ])

        const dateTitle = await responseTitle.json();

        dateTitle.forEach(articles => {
            const accordionDiv = document.createElement('div');
            accordionDiv.className = 'accordion';
            const headDiv = document.createElement('div');
            headDiv.className = 'head';
            const span = document.createElement('span');
            span.textContent = articles.title;
            const btn = document.createElement('button');
            btn.className = 'button';
            btn.setAttribute('id', articles._id);
            btn.textContent = 'More'
            const extraDiv = document.createElement('div');
            extraDiv.className = 'extra';
            const p = document.createElement('p');




            extraDiv.appendChild(p);
            headDiv.appendChild(span);
            headDiv.appendChild(btn);
            accordionDiv.appendChild(headDiv);

            extraDiv.appendChild(p);

            accordionDiv.appendChild(extraDiv)
            main.appendChild(accordionDiv)
        })

        const date = await response.json();

        date.content.forEach(title=>{
            let p = document.querySelectorAll('p');
            Array.from(p).forEach(p=>p.textContent=title)
        })
        let btns = document.querySelectorAll('button');

        console.log(btns)
        Array.from(btns).forEach(btn => {
            btn.addEventListener('click', () => {
                let div = document.getElementById('extra');
                if (btn.textContent === 'More') {
                    div.style.display = 'block'
                    btn.textContent = 'Less'
                } else {
                    div.style.display = 'none'
                    btn.textContent = 'More'
                }
            })

        })


    }

}
