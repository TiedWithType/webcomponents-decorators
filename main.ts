import { WebComponent, CustomElement, Input, EventListener, template, stylesheet } from "./web";

@WebComponent("app-title") class AppTitle extends CustomElement {
 @template() appTemplate() {
  return `<h1>App title</h1>`
 }
}

@WebComponent("app-image") class AppImage extends CustomElement {
 @Input() src = "default";
 
 @stylesheet() appStyle() {
  return `
   img {
    max-inline-size: 250px
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <img src=${this.src} alt=${this.src} />
  `
 }
}

@WebComponent("app-input") class AppInput extends CustomElement {
 @Input() value;
 
  @stylesheet() appStyle() {
  return `
   input {
    inline-size: 250px;
    box-sizing: border-box;
    padding: 10px
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <input name="" type="" value=${this.value} />
  `
 }
}

@WebComponent("app-root") class AppRoot extends CustomElement {
 @Input() src = "https://placehold.co/250/grey/white"
 
 @stylesheet() appStyle() {
  return `
   :host {
    display: grid;
    place-items: center;
    place-content: center;
    grid-template-columns: repeat(1, 250px)
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <app-title></app-title>
   <app-image src=${this.src}></app-image>
   <app-input value=${this.src}></app-input>
  `;
 }
}