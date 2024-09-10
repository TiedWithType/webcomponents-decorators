import { WebComponent, CustomElement, template, stylesheet } from "/web";

@WebComponent("app-title")
export class AppTitle extends CustomElement {
 @template() appTemplate() {
  return `<h1>Random Image generator</h1>
   <h4>from API</h4>
  `
 }
 
 @stylesheet() appStyle() {
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