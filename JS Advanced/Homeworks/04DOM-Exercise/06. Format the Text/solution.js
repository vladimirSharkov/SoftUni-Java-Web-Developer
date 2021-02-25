function solve() {
    let inputText = document.getElementById('input');
    let div = document.getElementById('output');
    let splitText = ((inputText.value).split('.')).filter(x => x);

    while (splitText.length > 0) {
        let par = splitText.splice(0, 3).join('.')+'.';
        div.innerHTML += '<p>' + par + '</p>';
    }
}