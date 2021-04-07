import {login} from '../api/data.js'
import {html} from '../../node_modules/lit-html/lit-html.js';


const loginTemplate = (onSubmit) => html`
    <section id="login">
        <div class="container">
            <form id="login-form" action="#" method="post"  @submit=${onSubmit}>
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>

                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">

                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username')
        const password = formData.get('password')

        await login(username,password);
        ctx.setUserNav();
        ctx.page.redirect('/catalog')
    }
}