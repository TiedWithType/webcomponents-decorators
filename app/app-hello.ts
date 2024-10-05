import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-hello")
export class AppHello extends CustomElement {
 header = "Hello WebComponents";
 
 @styles() static appStyle() {
  return `:host { text-align: center; 
   span { color: var(--primaryColor)}
  }`
 }
 
 @template() static appTemplate() {
  return `
   <h1>${this.header}!!!</h1>
   <p>It's just 
   <span>example</span> project
   </p>
  `
 }
}