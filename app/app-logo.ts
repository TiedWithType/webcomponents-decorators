import { WebComponent, CustomElement, stylesheet, template, EventListener, Input } from "../@web/decorators";
import { onInit } from "../@decorators/hooks";

@WebComponent("app-logo") export class AppLogo extends CustomElement {
 
 @stylesheet() appStyle() {
  return `
   img {
    inline-size: 100%;
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <img src="/assets/logo.png" alt="logo" />
  `
 }
}