import { WebComponent, CustomElement, stylesheet, template } from "/web";
import { Settings } from "./app-settings.service";

@WebComponent("app-root") export class AppRoot extends CustomElement {
 settings = new Settings();
 
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