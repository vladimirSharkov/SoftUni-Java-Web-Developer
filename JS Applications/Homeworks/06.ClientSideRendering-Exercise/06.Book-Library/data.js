async function request(url, option) {
    const response = await fetch(url);
    return await response.json();
}

const host = 'http://localhost:3030/jsonstore/collections/books'

async function getAllBook() {
    return Object
        .entries(await request(host))
        .map(([k, v]) => Object.assign(v, {_id: k}))
}

async function getBookById(id) {
    return await request(host + '/' + id);
}

async function createBook(book) {
    return await request(host, {
        method: 'post',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    })
}

async function updateBook(id, book) {
    return await request(host + '/' + id, {
        method: 'put',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    })
}

async function deleteBook(id) {
    return await request(host + '/' + id, {
        method: 'delete'
    })
}

export {
    getAllBook,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};