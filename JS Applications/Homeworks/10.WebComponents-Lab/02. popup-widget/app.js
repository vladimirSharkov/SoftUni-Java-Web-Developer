import {html, render} from '../node_modules/lit-html/lit-html.js';


const templateRR = (ctx) => html`
    <style>
        .wrapper {
            position: relative;
        }

        .info {
            font-size: 0.8rem;
            width: 200px;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: 20px;
            left: 10px;
            z-index: 3;
        }

        img {
            width: 1.2rem;
        }

        .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
        }
    </style>
    <span class="wrapper">
      <span class="icon" tabindex="0">
        <img src="${ctx.img}" alt="${ctx.altImg}">
      </span>

      <span class="info">
       ${ctx.text}
      </span>
    </span>`;

class PopupWidget extends HTMLElement {
    constructor() {
        super();

        this.state = {
            text:this.text,
            img:this.img,
            alt:this.altImg
        };
        this.root = this.attachShadow({mode: 'open'});
        this._update();
    }
    get text(){
        return this.getAttribute('data-text') || '';
    }

    get img(){
        return this.getAttribute('img') || '';
    }

    get altImg(){
        return this.getAttribute('alt-img') || '';
    }
    _update(){
        render(templateRR(this.state),this.root)
    }
}

customElements.define('popup-widget', PopupWidget)
