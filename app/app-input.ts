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
    
        &+label {
        position: absolute;
        top: -7px;
        left: 7px;
        font-size: 75%;
        background: #fff;
        padding-inline: 5px;
        transition: color 0.3s ease;
        color: #a9a9a9; /* Początkowy kolor etykiety */
        
           @media (prefers-color-scheme: dark) {
      background: #212121;
      color: #fff;
     }
      }
    
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
     
      &:focus-within + label {
        color: var(--accentColor); /* Kolor etykiety po wprowadzeniu tekstu */
      }
    
     
     @media (prefers-color-scheme: dark) {
      background: #212121;
      color: #fff;
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