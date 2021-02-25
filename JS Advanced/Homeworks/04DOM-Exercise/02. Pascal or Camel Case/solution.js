function solve() {
    let textInput = document.getElementById('text').value;
    let conventionText = document.getElementById('naming-convention').value;
    console.log(conventionText)

    let result = document.getElementById('result');

    switch (conventionText) {
        case'Camel Case':
            textInput = textInput.toLowerCase();
            let arr = Array.from(textInput);
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === ' ') {
                    arr[i] = ''
                    arr[i + 1] = arr[i + 1].toLocaleUpperCase()
                }
            }
            result.textContent = arr.join('')
            break;
        case'Pascal Case':
            textInput = textInput.toLowerCase();
            let arr2 = Array.from(textInput);
            for (let i = 0; i < arr2.length; i++) {
                if (i === 0) {
                    arr2[i] = arr2[i].toUpperCase()
                }
                if (arr2[i] === ' ') {
                    arr2[i] = ''
                    arr2[i + 1] = arr2[i + 1].toLocaleUpperCase()
                }
            }
            result.textContent = arr2.join('')
            break;
        default:
            result.textContent = 'Error!'
            break
    }
}