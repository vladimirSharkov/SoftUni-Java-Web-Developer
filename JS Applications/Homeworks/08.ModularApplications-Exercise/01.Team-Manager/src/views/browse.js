import {html} from '../../node_modules/lit-html/lit-html.js';
import {getTeams, getTeamCount} from '../api/data.js'

const browseTemplate = (teams, page, pages) => html`
    <section id="browse">

        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>

        <article class="layout narrow">
            <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
        </article>
        <header>Page ${page} of ${pages}${pageNext(page, pages)}</a></header>
        ${teams.map(teamTemplate)}
    </section>`;

const teamTemplate = (team) => html`
    <article class="layout">
        <img src="${team.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">? Members</span>
            <div><a href=${`/details/${team._id}`} class="action">See details</a></div>
        </div>
    </article>`;

function pageNext(page, pages) {
    debugger
    if (page > 1) {
        html`<a href="/browse" class="pager">Next &gt;</a>`;
    }
    if (page < pages) {
        html`<a href="/browse" class="pager">Prev </a>`;
    }


}


export async function browsePage(ctx) {
    const teams = await getTeams();
    const count = await getTeamCount();
    const pages = Math.ceil(count / 5)
    const page = 1;

    ctx.render(browseTemplate(teams, page, pages))
}
