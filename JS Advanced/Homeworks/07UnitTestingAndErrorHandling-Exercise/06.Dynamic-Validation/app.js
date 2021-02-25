function validate() {
    const input = document.querySelector('#email');
    const pattern = /^[a-z]+@[a-z]+.[a-z]+$/gm;
        input.addEventListener('change', () => {
            if (!pattern.test(input.value)){
                input.classList.add('error');
            }else{
                input.removeAttribute('class');
            }
        })
}