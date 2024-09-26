import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      
    .wrapper{
      width: 500px;
      border: 3px solid black;
      text-align: center;
      background-color: turquoise;
      overflow: hidden;
      border-radius: 20px;
    }

  img {
    width: 60%;
    margin: 10px 50px;
  }

button {
  padding: 10px;
  font-size: 20px;
  background-color: white;
}



    `;
  }

  render() {
    return html`
    
    <div>${this.title}</div>
    
  <div class="wrapper">
      <h1 class="cardTitle">USA</h1>
      <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" class="image">
      <h4>This is an image of the American flag</h4>
      <button> <a href="https://hax.psu.edu"> Details </a></button>
  </div>

    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
