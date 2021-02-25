function search() {
    let inputText = document.getElementById('searchText').value;
    let towns = document.querySelectorAll('ul li');
    let result = document.getElementById('result');
    let count = 0;
    let arr = Array.from(towns)
    arr.map(e=>e.textContent).forEach((element,index,arr3)=>{
        if ( element.match(inputText)){
            count++

            arr[index].style.fontWeight = 'bold'
            arr[index].style.textDecoration = 'underline'
        }
       return result.textContent=`${count} matches found`
    })
}
