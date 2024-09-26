import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-button")
export class AppButton extends CustomElement {
 settings = new Settings();
 @Input() state = true;

 @onInit() init() {
  this.settings.subscribe(x => {
   this.state = (x.length > 0);
  })
 }
 
 @EventListener("click") click({ target }) {
  if (target.dataset.enabled == "false") return;
  this.settings.imageUrl = this.settings.seedUrl;
 }
 
 @styles() static appStyle() {
  return `
  a {
    border-radius: 5px;
    text-decoration: none;
    padding: 10px;
    color: #fff;
    background: royalblue;
    font-size: 14px;
    
    &[data-enabled="false"] {
     background: #eee;
    }
   }
  `;
 }
 
 @template() static appTemplate() {
  return `
   <a data-enabled=${this.state}>
    Generate</a>
  `
 }
}