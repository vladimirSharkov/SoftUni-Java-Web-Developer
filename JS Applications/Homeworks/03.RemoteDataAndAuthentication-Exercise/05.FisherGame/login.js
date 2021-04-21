document.querySelector('form').addEventListener('submit', onLogin);

async function onLogin(event) {
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
    window.location.pathname = 'indexDem.html'
}