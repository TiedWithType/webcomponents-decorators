import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-input")
export class AppInput extends CustomElement {
 @Input() value = "";
 settings = new Settings();
 
 @styles() static appStyle() {
  return `
   :host {
    inline-size: 100%;
    position: relative;
   }
   
   input {
    inline-size: 100%;
    box-sizing: border-box;
    font-family: inherit;
    padding: 10px;
    
    @media (prefers-color-scheme: dark) {
     background: var(--dark);
     color: var(--light);
    }
    
    &+label {
     position: absolute;
     top: -7px;
     left: 7px;
     font-size: 75%;
     background: #fff;
     padding-inline: 5px;
     transition: color 0.3s ease;
     
     @media (prefers-color-scheme: dark) {
      background: var(--dark);
      color: var(--light);
     }
    }
    
    &[readonly] {
     cursor: not-allowed;
     border: solid 1px;
     border-radius: 5px;
      
     &:focus, &:hover {
      overflow: 0;
      outline: 0;
     }
     
     &:focus-within + label {
      color: var(--accentColor);
     }
    }
  }`
 }
 
 @onInit() ready() {
  this.settings.subscribe((x, key) => {
    if(key =="imageUrl")this.value = x;
  })
 }
 
 @EventListener("click") inputController(event) {
  event.target.select()
 }

 @template() static appTemplate() {
  return `
   <input readonly=true value=${this.value} />
   <label for="">url</label>
  `
 }
}