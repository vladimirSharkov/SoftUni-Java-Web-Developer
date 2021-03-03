document.querySelector('form').addEventListener('submit', onRegisterSubmit);

async function onRegisterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let repass = formData.get('rePass');

    if (email === '' || password === '') {
        alert('All fields are required')
    } else if (password !== repass) {
        alert('Password don\'t match!')
    }
    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    console.log(data)
    sessionStorage.setItem('userToken', data.accessToken);
    window.location.pathname = "index.html";
}