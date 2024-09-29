import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";

@WebComponent("app-root") export class AppRoot extends CustomElement {
 @styles() static appStyle() {
  return `
   :host {
    display: grid;
    gap: 10px;
    place-items: center;
    place-content: center;
    grid-template-columns: repeat(1, 250px);
   }
  `
 }
 
 @template() static appTemplate() {
  return `
   <app-title></app-title>
   <app-image></app-image>
   <app-settings></app-settings>
   <app-input></app-input>
   <app-button></app-button>
  `
 }
}