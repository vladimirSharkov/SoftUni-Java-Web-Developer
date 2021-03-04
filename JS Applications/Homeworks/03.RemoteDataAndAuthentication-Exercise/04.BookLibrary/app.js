function attachEvents() {

    document.getElementById('loadBooks').addEventListener('click', getAllBooks)
    document.querySelector('#creatForm').addEventListener('submit', (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const title = formData.get('title');
        const author = formData.get('author');

        ev.target.reset()
        postBook({title, author})
        getAllBooks()
    })
    document.querySelector('table').addEventListener('click', handleTable);

    document.getElementById('editForm').addEventListener('submit',updateBook)
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

async function updateBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const title = formData.get('title');
    const author = formData.get('author')
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title,author})
    })

    document.getElementById('creatForm').style.display = 'block'
    document.getElementById('editForm').style.display = 'none'
    event.target.reset()
    getAllBooks()

}

async function deleteBook(id) {
    const result = await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    })
    getAllBooks()
}

function handleTable(event) {
    if (event.target.className === 'editBtn') {

        document.getElementById('creatForm').style.display = 'none'
        document.getElementById('editForm').style.display = 'block'
        const bookId = event.target.parentNode.parentNode.dataset.id;
        loadBookForEditing(bookId);
    } else if (event.target.className === 'deleteBtn') {
        const bookId = event.target.parentNode.parentNode.dataset.id;
        deleteBook(bookId)
    }
}

async function loadBookForEditing(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);

    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;
    document.querySelector('#editForm [name="id"]').value = id;
}