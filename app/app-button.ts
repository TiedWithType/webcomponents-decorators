import { WebComponent, CustomElement, Input, EventListener, template, stylesheet } from "/web";
import { Settings } from "./app-settings.service";

@WebComponent("app-button")
export class AppButton extends CustomElement {
 settings = new Settings();
 @Input() state = true;

 @EventListener("ready-event") ready() {
  this.settings.subscribe(x => {
   this.state = (x.length > 0);
  })
 }
 
 @EventListener("click") click({ target }) {
  if (target.dataset.enabled == "false") return;
  
  Object.assign(target, {

  })
 }
 
 @stylesheet() appStyle() {
  return `
  a {
    border-radius: 4px;
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
 
 @template() appTemplate() {
  return `
   <a data-enabled=${this.state}>
    Button</a>
  `
 }
}