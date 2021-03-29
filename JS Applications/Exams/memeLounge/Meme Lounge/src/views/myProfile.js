import {html} from '../../node_modules/lit-html/lit-html.js';
import {getMyItems} from '../api/data.js'

const myTemplate = (data, username, email, gender) => html`
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
            <div class="user-content">
                <p>Username: ${username}</p>
                <p>Email: ${email}</p>
                <p>My memes count: ${data.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">

            ${data.length === 0 ? html`<p class="no-memes">No memes in database.</p>`
                    : data.map(itemTemplate)}


        </div>
    </section>`;

const itemTemplate = (item) => html`
    <div class="user-meme">
        <p class="user-meme-title">${item.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${item.imageUrl}">
        <a class="button" href=${`/details/${item._id}`}>Details</a>
    </div>`

export async function myPage(ctx) {
    const username = sessionStorage.getItem('username')
    const email = sessionStorage.getItem('email')
    const gender = sessionStorage.getItem('userGender')

    const data = await getMyItems()
    ctx.render(myTemplate(data, username, email, gender))
}