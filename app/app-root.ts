import { WebComponent, CustomElement, stylesheet, template, EventListener, Input } from "../@decorators/components";
import { onInit } from "../@decorators/hooks";

@WebComponent("app-root") export class AppRoot extends CustomElement {
 
 @stylesheet() appStyle() {
  return `
   :host {
    display: grid;
    grid-template-columns: 250px;
    gap: 10px;
    place-items: center;
    place-value: center;
    user-select: none;
    
    * {
     
     box-sizing: border-box;
     margin: 0;
    }
    
    h2 {
     inline-size: min-value;
     text-align: center;
    }
     
    img {
     inline-size: 100%;
     object-fit: cover;
    }
    
    input {
     font-family: inherit;
     inline-size: 100%;
     padding-block: 5px;
     border: 0;
     outline: none;
     overflow: hidden;
     background: transparent;
     border-bottom: solid 2px #369;
     color: #fff;
    }
   }
  `
 }
 
 @Input() value = "WebComponents decorators";
 
 @EventListener("input") input({ target }) {
  this.value = target.value;
 }
 
 @template() appTemplate() {
  return `
   <h2 data-bind="value">${this.value}!!!</h2>
   <img src="/assets/logo.png" alt="logo">
   <input type="search" value="${this.value}" />
  `
 }
}