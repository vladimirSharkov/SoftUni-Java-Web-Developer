document.querySelectorAll('form')[1].addEventListener('submit', onRegister);

async function onRegister(event) {
    event.preventDefault();
    console.log(event.target.querySelector('button').textContent)
    if (event.target.querySelector('button').textContent === 'Register') {


        const formData = new FormData(event.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('rePass');

        if (email === '' || password === '') {
            return alert('All fields are required')
        } else if (password !== repass) {
            return alert('Password don\'t match!')
        }

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        if (!response.ok) {
            const error = response.json();
            return alert(error.message);
        }

        const data = await response.json();
        sessionStorage.setItem('userToken', data.accessToken);
        window.location.pathname = 'index.html'
    }else if (event.target.querySelector('button').textContent === 'Login'){
        event.preventDefault();
        const formData = new FormData(event.target);
        let email = formData.get('email');
        let password = formData.get('password');

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        if (!response.ok){
            const error = response.json();
            return alert(error.message);
        }

        const data = await response.json();
        sessionStorage.setItem('userToken',data.accessToken);
        window.location.pathname = 'index.html'
    }
}