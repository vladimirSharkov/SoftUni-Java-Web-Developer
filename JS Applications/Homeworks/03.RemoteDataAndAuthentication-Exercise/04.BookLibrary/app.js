function attachEvents() {

    document.getElementById('loadBooks').addEventListener('click', getAllBooks)
    document.querySelector('#creatForm').addEventListener('submit', (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const title = formData.get('title');
        const author = formData.get('author');

        ev.target.reset()
        postBook({title, author})
    })
    document.querySelector('table').addEventListener('click', handleTable)
}

attachEvents();

async function request(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

async function getAllBooks() {
    const book = await request('http://localhost:3030/jsonstore/collections/books')

    const table = document.querySelector('tbody');
    [...table.children].forEach(c => c.remove())
    Object.entries(book).map(([id, b]) => {

        const tr = document.createElement('tr');
        tr.setAttribute('data-id', id)
        const tdName = document.createElement('td');
        tdName.textContent = b.title;
        const tdAuthor = document.createElement('td');
        tdAuthor.textContent = b.author;
        const td = document.createElement('td');
        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.className = 'editBtn'
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.className = 'deleteBtn'

        td.appendChild(btnEdit);
        td.appendChild(btnDelete);

        tr.appendChild(tdName);
        tr.appendChild(tdAuthor);
        tr.appendChild(td);

        table.appendChild(tr);
    })

}

async function postBook(book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    })
}

async function updateBook(id, book) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    })
    return result;
}

async function deleteBook(id) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    })
    return result;
}

function handleTable(event) {
    if (event.target.className === 'editBtn') {

        document.getElementById('creatForm').style.display = 'none'
        document.getElementById('editForm').style.display = 'block'
        const bookId = event.target.parentNode.parentNode.dataset.id;
        loadBookForEditing(bookId);
    } else if (event.target.className === 'deleteBtn') {

    }
}

async function loadBookForEditing(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);
}