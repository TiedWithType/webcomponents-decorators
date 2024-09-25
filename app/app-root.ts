import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-root")
export class AppRoot extends CustomElement {
 
 @styles() static appStyle() {
  return `
   :host {
    display: grid;
    grid-template-columns: 300px;
    place-items: center;
    place-value: center;
    user-select: none;
    
    @media screen and (width > 628px) {
     grid-template-columns: 600px;
    }
    
    span {
     font-size: smaller;
     line-height: 1.6;
     mark {
      font-family: monospace;
      color: #212121;
      background: #fff;
      border: solid 1px;
      border-radius: 5px;
      padding: 5px;
     }
    }
   }
  `
 }
 
 @template() static appTemplate() {
  return `
   <app-hello></app-hello>
   <app-logo></app-logo>
   <span>
    to change content edit
    <mark>app-hello.ts</mark> or
    <mark>app-logo.ts</mark>
   </span>
  `
 }
}