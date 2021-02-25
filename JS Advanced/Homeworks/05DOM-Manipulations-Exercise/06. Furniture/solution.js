function solve() {
    const inputText = document.querySelectorAll('textarea');
    const btn = document.querySelectorAll('button');

    btn[0].addEventListener('click', (ev) => {
        let parse = JSON.parse(inputText[0].value);

        for (const element of parse) {
            let body = document.querySelector('tbody');

            let trElement = document.createElement('tr');
            let tdImg = document.createElement('td');
            let img = document.createElement('img');
            img.setAttribute('src', element.img);
            tdImg.appendChild(img);
            trElement.appendChild(tdImg);

            let tdName = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = element.name
            tdName.appendChild(pName);
            trElement.appendChild(tdName);

            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = element.price;
            tdPrice.appendChild(pPrice)
            trElement.appendChild(tdPrice)

            let tdDecFactor = document.createElement('td');
            let pDecFactor = document.createElement('p');
            pDecFactor.textContent = element.decFactor;
            tdDecFactor.appendChild(pDecFactor);
            trElement.appendChild(tdDecFactor);

            let tdCheck = document.createElement('td');
            let input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            tdCheck.appendChild(input);
            trElement.appendChild(tdCheck);

            body.appendChild(trElement)
        }

    })

    btn[1].addEventListener('click', () => {
        let items = Array
            .from(document.querySelectorAll('input[type= checkbox]:checked'))
            .map(input => input.parentNode.parentNode)
        let obj = {
            bought: [],
            totalPrice: 0,
            avgFactor: 0
        }

        for (const item of items) {

            obj.bought.push(item.children[1].textContent);
            obj.totalPrice += Number(item.children[2].textContent);
            obj.avgFactor += Number(item.children[3].textContent) / items.length;
        }


        inputText[1].textContent = `Bought furniture: ${obj.bought.join(', ')}\nTotal price: ${obj.totalPrice.toFixed(2)}\nAverage decoration factor: ${obj.avgFactor}`
    })


}

