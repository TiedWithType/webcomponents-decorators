import { WebComponent, CustomElement, styles, template } from "../@web/decorators";
import logoImg from "/assets/logo.webp";

@WebComponent("app-logo")
export class AppLogo extends CustomElement {
 src = logoImg;
 
 @styles() static appStyle() {
  return `
   img {
    inline-size: 100%;
    min-block-size: 300px;
    transform: translateX(-10px)
   }
  `
 }
 
 @template() static appTemplate() {
  return `<img loading="lazy" src="${this.src}" alt="logo" />`
 }
}