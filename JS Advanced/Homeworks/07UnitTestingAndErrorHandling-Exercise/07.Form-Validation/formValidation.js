function validate() {

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('confirm-password');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');
    let isChecked = false;

    document.getElementById('company').addEventListener('change', (ev) => {
        if (ev.target.checked) {
            isChecked = true
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    })


    document.getElementById('submit').addEventListener('click', (ev) => {
        ev.preventDefault();

        let isValid = true;

        let patternUsername = /^[a-zA-Z0-9]{3,20}$/gm;
        if (!patternUsername.test(username.value)) {
            username.style.borderColor = 'red';
            isValid = false;
        } else {
            username.style.borderColor = 'none';
        }

        let emailPattern = /^.*@.*\..*$/gm;
        if (!emailPattern.test(email.value)) {
            email.style.borderColor = 'red';
            isValid = false;
        } else {
            email.style.borderColor = 'none';
        }

        let passwordPattern = /^[\w]{5,15}$/gm;
        if (!passwordPattern.test(password.value) || passwordPattern.test(passwordConfirm.value) ||
            password.value !== passwordConfirm.value) {
            password.style.borderColor = 'red';
            passwordConfirm.style.borderColor = 'red';
            isValid = false;
        } else {
            password.style.borderColor = 'none';
            passwordConfirm.style.borderColor = 'none';
        }


        if (isChecked) {
            if ((companyNumber.value) < 1000 || (companyNumber.value) > 9999 || !companyNumber.value) {
                companyNumber.style.borderColor = 'red'
            } else {
                companyNumber.style.borderColor = 'none'
            }
        }

        if (isValid) {
            valid.style.display = 'block'
        } else {
            valid.style.display = 'none'
        }
    })
}
