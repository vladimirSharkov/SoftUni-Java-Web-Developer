import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';

const main = document.querySelector('main');

page('/');
page('/details');
page('/login');
page('/register');
page('/logout');

page.start()