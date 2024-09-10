import { WebComponent, CustomElement, Input, EventListener, template, stylesheet } from "/web";
import { Settings } from "./app-settings.service";

@WebComponent("app-input")
export class AppInput extends CustomElement {
 @Input() value;
 settings = new Settings();
 
 @stylesheet() appStyle() {
  return `
   input {
    inline-size: 250px;
    box-sizing: border-box;
    padding: 10px
  }`
 }
 
 @EventListener("input") inputController(e) {
  this.settings.imageUrl = e.target.value;
 }

 @template() appTemplate() {
  return `
   <input name="" type="search" value=${this.value} />
  `
 }
}