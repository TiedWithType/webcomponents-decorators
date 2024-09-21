import { WebComponent, CustomElement, Input, EventListener, template, stylesheet } from "/web";
import { Settings } from "./app-settings.service";

@WebComponent("app-input")
export class AppInput extends CustomElement {
 @Input() value;
 settings = new Settings();
 
 @stylesheet() appStyle() {
  return `
   :host {
    inline-size: 100%;
   }
   
   input {
    inline-size: 100%;
    box-sizing: border-box;
    
    padding: 10px;
    
    &[readonly] {
     background-color: #d3d3d3;
     color: #a9a9a9;
     cursor: not-allowed;
     border: solid 1px;
     border-radius: 5px;
      
     &:focus, &:hover {
     overflow: 0;
     outline: 0;
     }
    
     
     @media (prefers-color-scheme: dark) {
      background: #212121;
      color: #fff;
     }
    }
  }`
 }
 
 @EventListener("ready-event") ready() {
  this.settings.subscribe(x => {
   this.value = x;
  })
 }
 
 @EventListener("click") inputController(event) {
  event.target.select()
 }

 @template() appTemplate() {
  return `
   <input readonly=true type="search" value=${this.value} />
  `
 }
}