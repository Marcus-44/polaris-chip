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
    this.title = "Put Title";
    this.imageURL = "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg";
    this.description = "This is an image of the American flag";
    this.buttonLink = "https://www.hax.psu.edu";
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
      <h1 class="cardTitle">${this.title}</h1>
      <img src="${this.imageURL}" class="image">
      <h4>${this.description}</h4>
      <button> <a href="${this.buttonLink}"> Details </a></button>
  </div>

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      imageURL: { type: String },
      description: { type: String },
      buttonLink: { type: String },
      
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
