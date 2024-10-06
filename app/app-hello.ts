import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-hello")
export class AppHello extends CustomElement {
 header = "Hello WebComponents";
 branch = "main";
 
 @styles() static appStyle() {
  return `:host { text-align: center; 
   span {
    color: var(--primaryColor);
    background: var(--accentColor);
    padding: 5px;
    border-radius: 5px;
   }
  }`
 }
 
 @template() static appTemplate() {
  return `
   <h1>${this.header}!!!</h1>
   <p>Just <span>${this.branch}</span> repository</p>
  `
 }
}