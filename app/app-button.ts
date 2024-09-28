import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-button")
export class AppButton extends CustomElement {
 settings = new Settings();
 
 @EventListener("click") click({ target }) {
  this.settings.imageUrl = this.settings.seedUrl;
 }
 
 @styles() static appStyle() {
  return `
   button {
    border-radius: 5px;
    text-decoration: none;
    padding: 10px;
    color: #fff;
    background: var(--primaryColor);
    font-size: 14px;
    border: 0;
    font-family: inherit;
   }
  `;
 }
 
 @template() static appTemplate() {
  return `
   <button>Generate</button>
  `
 }
}