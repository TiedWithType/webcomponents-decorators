import { WebComponent, CustomElement, stylesheet, template, EventListener } from "../@web/decorators";

@WebComponent("app-hello")
export class AppHello extends CustomElement {
 text = "Hello WebComponents";
 
 @stylesheet() appStyle() {
  return `
   :host {
    text-align: center;
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <h1>${this.text}!!!</h1>
  `
 }
}