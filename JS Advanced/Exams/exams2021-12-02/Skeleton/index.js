function solve() {

    const lecture = document.querySelector('input[type="text"]');
    const date = document.querySelector('input[type="datetime-local"]');
    const moduleName = document.querySelector('select');
    const moduleOutput = document.querySelector('.modules');

    let state = {};

    document.querySelector('button').addEventListener('click', (ev) => {
        ev.preventDefault();
        console.log(moduleName.value)

        if (lecture.value===''||date.value===''|| moduleName.value==='Select module'){
            return
        }

        const li = document.createElement('li');
        li.className = 'flex';

        const delBtn = document.createElement('button');
        delBtn.className = 'red';
        delBtn.textContent = 'Del';

        let text = `${lecture.value} - ${date.value.split('-').join('/').split('T').join(' - ')}`;
        const h4 = document.createElement('h4');
        h4.textContent = text;

        li.appendChild(h4);
        li.appendChild(delBtn);

        delBtn.addEventListener('click', (ev) => {
            let liElement = ev.target.parentNode;
            let ulElement = liElement.parentNode;
            let moduleElement = ulElement.parentNode;

            liElement.remove();
            if (ulElement.children.length===0){
                moduleElement.remove();
            }

        })
        let ul;
        let module;

        if (!state[moduleName.value]) {
            let h3 = document.createElement('h3');
            h3.textContent = `${moduleName.value.toUpperCase()}-MODULE`;
            ul = document.createElement('ul');
            module = document.createElement('div');
            module.className = 'module';

            module.appendChild(h3);
            module.appendChild(ul);

            state[moduleName.value] = {module, ul, lis: []};
        } else {
            module = state[moduleName.value].module;
            ul = state[moduleName.value].ul
        }

        state[moduleName.value].lis.push({li, date: date.value});
        state[moduleName.value].lis.sort((a, b) => a.date.localeCompare(b.date)).forEach(({li}) => {
            ul.appendChild(li);
        })
        moduleOutput.appendChild(module)
    })
}