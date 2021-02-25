function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const option = document.createElement('option');
    const select = document.getElementById('menu');
    option.setAttribute('text',inputText.value);
    option.setAttribute('value',inputValue.value);
    option.textContent = inputText.value
    select.appendChild(option)

    inputValue.value ='';
    inputText.value = '';
}