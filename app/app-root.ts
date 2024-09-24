import { WebComponent, CustomElement, stylesheet, template, EventListener, Input } from "../@web/decorators";

@WebComponent("app-root")
export class AppRoot extends CustomElement {
 
 @stylesheet() appStyle() {
  return `
   :host {
    display: grid;
    grid-template-columns: 300px;
    place-items: center;
    place-value: center;
    user-select: none;
    
    span {
     font-size: x-small;
     
     mark {
      font-family: monospace;
      color: #fff;
      background: inherit;
      border: solid .5px;
      border-radius: 5px;
      padding: 5px;
     }
    }
   }
  `
 }
 
 @template() appTemplate() {
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