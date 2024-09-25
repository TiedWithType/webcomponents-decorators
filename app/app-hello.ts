import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-hello")
export class AppHello extends CustomElement {
 text = "Hello WebComponents";
 
 @styles() static appStyle() {
  return `:host { text-align: center; }`
 }
 
 @template() static appTemplate() {
  return `<h1>${this.text}!!!</h1>`
 }
}