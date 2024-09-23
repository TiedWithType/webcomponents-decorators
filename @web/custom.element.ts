import { EventListenerResolver } from "./events";
import { onInitDispatcher } from "./hooks";

export class CustomElement extends HTMLElement {
 constructor(...args) {
  super(...args);
  this.shadow = this.attachShadow({ mode: "open" });
  this.styleRef = document.createElement("style");
  this.host = document.createElement("container");
 }
 
 connectedCallback() {
  if(this.stylesheet)
   this.styleRef.textContent = this.stylesheet();
   
  this.templateRender();
  EventListenerResolver(this);
  
  this.shadow.dispatchEvent(onInitDispatcher);
 }
 
 attributeChangedCallback(attr, prev, next) {
  if(prev !== next) { 
   this[attr] = next;
   this.updateTemplate();
  }
 }
 
 static get observedAttributes() {
  return this.prototype.observed ?? [];
 }
 
 templateRender() {
  this.updateTemplate();
 
  this.shadow.appendChild(this.styleRef);
  this.shadow.appendChild(this.host);
 }
 
 updateTemplate() {
  this.host.innerHTML = this.template();
 }
}