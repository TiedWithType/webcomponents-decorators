import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-buttons")
export class AppButtons extends CustomElement {
 settings = new Settings();
 
 @styles() static appStyle() {
  return `
   :host { 
    display: flex;
    gap: 10px;
   }
  
   button {
    border-radius: 5px;
    text-decoration: none;
    padding: 10px;
    color: #fff;
    background: var(--accentColor);
    font-size: 14px;
    border: 0;
    font-family: inherit;
   }
  `;
 }
 
 @EventListener("click") seedControl({target}) {
  this.seed = parseInt(localStorage.seed) ||
  this.settings.seed;
  this[target.dataset.attr]();
 }
 
 prev() {
  if(this.seed == 0) {
   return;
  }
 
  this.settings.imageUrl =
  this.settings.fixedUrl(this.seed-=1);
 }
 
 next() {
  if(this.seed == this.settings.pool) {
   return;
  }
 
  this.settings.imageUrl =
  this.settings.fixedUrl(this.seed+=1);
 }
 
 @template() static appTemplate() {
  return `
   <button data-attr="prev">Prev</button>
   <button data-attr="next">Next</button>
  `
 }
}