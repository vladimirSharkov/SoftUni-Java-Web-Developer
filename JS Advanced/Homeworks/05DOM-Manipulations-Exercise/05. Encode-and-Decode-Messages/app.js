function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', (ev) => {

        let decode = '';
        let code = '';
        const inputText = document.querySelectorAll('textarea')[0];
        const mesText = document.querySelectorAll('textarea')[1];
        if (ev.target.textContent === 'Encode and send it') {
            let arr = (inputText.value);
            for (let i = 0; i < arr.length; i++) {
                let letter = String.fromCharCode(arr.charCodeAt(i) + 1);
                decode += letter;
            }
            mesText.value = decode;
            inputText.value = '';
        } else if (ev.target.textContent === 'Decode and read it') {
            let text = mesText.value.trim()
            for (let i = 0; i < text.length; i++) {
                let letter = String.fromCharCode(text.charCodeAt(i) - 1);
                code += letter;
                mesText.value = code;
            }
        }
    })
}