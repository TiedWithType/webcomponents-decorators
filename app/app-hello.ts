import { WebComponent, CustomElement, stylesheet, template, EventListener, Input } from "../@web/decorators";
import { onInit } from "../@decorators/hooks";

@WebComponent("app-hello") export class AppHello extends CustomElement {
 
 @stylesheet() appStyle() {
  return `
   :host {
    text-align: center;
   }
  `
 }
 
 text = "Hello WebComponents";
 
 @template() appTemplate() {
  return `
   <h1>${this.text}!!!</h1>
  `
 }
}