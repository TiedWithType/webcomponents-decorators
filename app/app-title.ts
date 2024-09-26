import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-title")
export class AppTitle extends CustomElement {
 @template() static appTemplate() {
  return `<h1>Random Image generator</h1>
   <h4>from API</h4>
  `
 }
 
 @styles() static appStyle() {
  return `
   :host {
    display: flex;
    font-size: 80%;
    place-items: center;
    place-content: center;
   }
  `
 }
}