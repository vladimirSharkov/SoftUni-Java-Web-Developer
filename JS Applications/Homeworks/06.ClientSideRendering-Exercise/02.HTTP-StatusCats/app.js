import {html, render} from "../node_modules/lit-html/lit-html.js";
import {cats as catData} from "./catSeeder.js";


const catCardTemplate = (cat) => html`
    <li>
        <img
                src="./images/${cat.imageLocation}.jpg"
                width="250"
                height="250"
                alt="Card image cap"
        />
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
                <p class="card-text">${cat.statusMessage}</p>
            </div>
        </div>
    </li>`;
const main = document.getElementById("allCats");

const catsLIst = html`
    <ul @click=${toggleInfo}>
        ${catData.map(catCardTemplate)}
    </ul>`;
render(catsLIst, main);

 function toggleInfo(event) {
     const element = event.target.parentNode.querySelector('.status');
     if (element.style.display === 'none'){
         element.removeAttribute('style')
     }else {
         element.style.display = 'none'
     }
 }