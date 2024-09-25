import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-logo")
export class AppLogo extends CustomElement {
 src = "/assets/logo.png";
 
 @styles() static appStyle() {
  return `
   img {
    inline-size: 100%;
    min-block-size: 300px;
   }
  `
 }
 
 @template() static appTemplate() {
  return `<img src="${this.src}" alt="logo" />`
 }
}