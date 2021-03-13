// const { html, render } = require("lit-html");

import {html, render} from "../node_modules/lit-html/lit-html.js";

const listTemplate = (data) => html`
    <ul>
        ${data.map((t) => html`
            <li>${t}</li>`)}
    </ul>`;

const root = document.getElementById("root");
const btn = document.getElementById("btnLoadTowns");
btn.addEventListener("click", updateList);

function updateList(event) {
    event.preventDefault()
    const input = document.querySelector("input").value;
    const towns = input.split(',').map(t => t.trim());
    const result = listTemplate(towns);
    render(result, root);
}

