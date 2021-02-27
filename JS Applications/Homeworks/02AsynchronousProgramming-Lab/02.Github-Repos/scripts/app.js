function loadRepos() {
    const input = document.getElementById('username');
    const url = `https://api.github.com/users/${input.value}/repos`
    const ul = document.getElementById('repos');
    fetch(url).then(result=>result.json()).then(el=>{
        ul.textContent = '';
        el.forEach(el=>{
            const li = document.createElement('li');
            console.log(el)
            li.textContent = el.name;
            ul.appendChild(li)
        })

    })
}