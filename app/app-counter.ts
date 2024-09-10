import { WebComponent, CustomElement, Input, EventListener, template, stylesheet } from "/web";
import { Settings } from "./app-settings.service";

@WebComponent("app-counter")
export class AppCounter extends CustomElement {
 @Input() current = 0;
 @Input() max = 50;
 
 settings = new Settings();
 
 @EventListener("ready-event") readyEvent() {
  this.settings.subscribe(x => {
   this.current = x.length;
  });
 }
 
 @stylesheet() appStyle() {
  return `
   p {
    font-size: 12px;
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <p> ${this.current} / ${this.max} </p>
  `
 }
}