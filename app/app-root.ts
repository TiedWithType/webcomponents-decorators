import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-root") export class AppRoot extends CustomElement {
 settings = new Settings();
 
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
  const { imageUrl } = this.settings;
 
  return `
   <app-title></app-title>
   <app-image></app-image>
   <app-input value="${imageUrl}"></app-input>
   <app-counter current="${imageUrl.length}">
   </app-counter>
   <app-button></app-button>
  `
 }
}