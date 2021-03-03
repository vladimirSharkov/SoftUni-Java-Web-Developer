function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', getPhonebook)
    document.getElementById('btnCreate').addEventListener('click', () => {
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;

        postPhonebook({person, phone});
        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
    })
}

attachEvents();


async function getPhonebook() {
    document.getElementById('phonebook').innerHTML = ''
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    const phoneNumber = Object.values(data).map(p => {
        const li = document.createElement('li');
        li.textContent = `${p.person}:${p.phone}`;
        const btn = document.createElement('button');
        btn.textContent = 'Delete'
        li.appendChild(btn)
        document.getElementById('phonebook').appendChild(li)
    })
}

async function postPhonebook(phone) {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(phone)
    })
    const data = await response.json();
}