async function onSubmit(data) {
    const body = JSON.stringify({
        email: data.email,
        password: data.password,
    });

    try {
        const response = await fetch('http://localhost:5000/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });
        const data = await response.json();
        if (response.status === 200) {
            sessionStorage.setItem('authToken', data.accessToken);
            onSuccess()
        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        console.error(err.message);
    }
}

let main;
let section;
let onSuccess;

export function setupLogin(mainTarget, sectionTarget,onSuccessTarget) {
    main = mainTarget;
    section = sectionTarget;
    onSuccess =onSuccessTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        form.addEventListener('formdata', (ev => {
            onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, {[k]: v}), {}));
        }));
    }));
}

export function showLogin() {
    main.innerHTML = '';
    main.appendChild(section);
}