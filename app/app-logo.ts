import { WebComponent, CustomElement, stylesheet, template, EventListener } from "../@web/decorators";

@WebComponent("app-logo")
export class AppLogo extends CustomElement {
 src = "/assets/logo.png";
 
 @stylesheet() appStyle() {
  return `
   img {
    inline-size: 100%;
    min-block-size: 300px;
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <img src="${this.src}" alt="logo" />
  `
 }
}