import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-root")
export class AppRoot extends CustomElement {
 
 @styles() static appStyle() {
  return `
   :host {
    display: grid;
    grid-template-columns: 18.75rem;
    place-items: center;
    place-content: center;
    user-select: none;
    
    @media screen and (width > 39.25rem) {
     grid-template-columns: 37.5rem;
    }
    
    span {
     font-size: smaller;
     line-height: 1.4;
     
     mark {
      font-family: monospace;
      color: var(--accentColor);
      background: transparent;
     }
    }
   }
  `
 }
 
 @template() static appTemplate() {
  return `
   <app-hello></app-hello>
   <app-logo></app-logo>
   <app-repo-list></app-repo-list>
  `
 }
}