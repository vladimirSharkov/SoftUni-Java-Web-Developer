function solution() {
    const input = document.querySelector('input');
    const [list, send, discarded] = document.querySelectorAll('.card ul');

    document.querySelector('button').addEventListener('click', () => {

        let name = input.value;
        input.value = ''
        const li = e('li', name, 'gift');
        const disBtn = e('button', 'Discard', 'discardButton');
        const sendBtn = e('button', 'Send', 'sendButton');
        disBtn.addEventListener('click',()=>{
            li.remove();
            const el = e('li', name, 'gift');
            discarded.appendChild(el)
        })
        sendBtn.addEventListener('click',()=>{
            li.remove();
            const el = e('li', name, 'gift');
            send.appendChild(el)
        })
        li.appendChild(sendBtn);
        li.appendChild(disBtn);
        list.appendChild(li);

        console.log(list)
        Array.from(list.children)
            .sort((a, b) => a.firstChild.textContent.localeCompare(b.firstChild.textContent))
            .forEach(e=>list.appendChild(e));

    })

    function e(type, text, cls) {
        let result = document.createElement(type);
        result.textContent = text;
        if (cls) {
            result.className = cls;
        }
        return result
    }
}


