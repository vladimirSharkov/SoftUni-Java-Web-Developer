function loadCommits() {
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`;
    const ul = document.getElementById('commits');

    fetch(url).then(response => {
        if (!response.ok) {
            throw response;
        }
        return result.json()
    }).then(date => {
        [...date].forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.commit.author.name}: ${item.commit.message}`
            ul.appendChild(li);
        })
    }).catch(error => {
        const li = document.createElement('li');
        li.innerHTML = `Error: ${error.status} (${error.statusText})`
        ul.appendChild(li);
    })
}