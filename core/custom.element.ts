import { EventListenerResolver } from "./events";


export class CustomElement extends HTMLElement {
 constructor(...args) {
  super(...args);
  this.shadow = this.attachShadow({ mode: "open" });
  this.styleRef = document.createElement("style");
 }
 
 connectedCallback() {
  if(this.stylesheet)
   this.styleRef.textContent = this.stylesheet();

  this.templateRender();
  EventListenerResolver(this);
  
  this.shadow.dispatchEvent(new CustomEvent("ready-event", {}));
 }
 
 attributeChangedCallback(attr, prev, next) {
  if(prev !== next) { 
   this[attr] = next;
   this.updateTemplate(attr, prev, next);
  }
 }
 
 static get observedAttributes() {
  return this.prototype.observed ?? [];
 }
 
 templateRender() {
  this.shadow.innerHTML = this.template().trim();
  this.shadow.appendChild(this.styleRef);
 }
 
 updateTemplate(attr, prev, next) {
  this.templateRender(); /* temporal fix */
 }
}