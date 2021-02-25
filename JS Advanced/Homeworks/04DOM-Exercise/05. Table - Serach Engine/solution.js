function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let inputText = document.getElementById('searchField');
     let tab = document.querySelectorAll('tbody tr');


       for (let row of tab) {
           if (row.textContent.includes(inputText.value)){
               row.setAttribute('class','select')
           }else{
               row.removeAttribute('class')
           }

       }

      let strings = Array.from(tab).map(e=>e.textContent).splice(1,tab.length-1);
      console.log(strings)

   }
}