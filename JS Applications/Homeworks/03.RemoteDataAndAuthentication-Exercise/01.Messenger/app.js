function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        let author = document.querySelector('input[name="author"]').value;
        let content = document.querySelector('input[name="content"]').value;
      await  creatMessages({author, content})
        document.querySelector('input[name="author"]').value = '';
        document.querySelector('input[name="content"]').value = '';

        getMessages()
    })

    document.getElementById('refresh').addEventListener('click', getMessages)

    getMessages();
}

attachEvents();


async function getMessages() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger')
    const data = await response.json();

    const messages = Object.values(data).map(m => `${m.author}: ${m.content}`).join('\n');
    console.log(messages)
    document.getElementById('messages').value = messages;
}

async function creatMessages(messages) {
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(messages)
    })

    const data = await response.json();
}