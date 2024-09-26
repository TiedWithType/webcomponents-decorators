import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-counter")
export class AppCounter extends CustomElement {
 @Input() current = 0;
 @Input() max = 50;
 
 settings = new Settings();
 
 @onInit() readyEvent() {
  this.settings.subscribe(x => {
   this.current = x.length;
  });
 }
 
 @styles() static appStyle() {
  return `
   p {
    font-size: 12px;
   }
  `
 }
 
 @template() static appTemplate() {
  return `
   <p> ${this.current} / ${this.max} </p>
  `
 }
}