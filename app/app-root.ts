import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";

@WebComponent("app-root") export class AppRoot extends CustomElement {
 @styles() static appStyle() {
  return `
   :host {
    display: grid;
    gap: 10px;
    place-items: center;
    place-content: center;
    grid-template-columns: repeat(1, 250px);
    
    div {   
     inline-size: 100%;
     display: flex;
     gap: 10px;
     justify-content: space-between;
    }
    
    span {
     position: fixed;
     bottom: 0;
     font-size: 10px;
     z-index: -1;
    }
   }
  `
 }
 
 appVersion = "0.0.2-apple_pie.build_0510241015";
 
 @template() static appTemplate() {
  return `
   <app-title></app-title>
   <app-image></app-image>
   <app-settings></app-settings>
   <app-input></app-input>
   <div>
    <app-buttons></app-buttons>
    <app-button></app-button>
   </div>
   <span>version ${this.appVersion}</span>
  `
 }
}