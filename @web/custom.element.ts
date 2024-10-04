import { EventListenerResolver } from "./events";
import { onInitDispatcher } from "./hooks";

export class CustomElement extends HTMLElement {
 constructor(...args) {
  super(...args);
  this.initalSetup();
 }
 
 initalSetup() {
  this.shadow = this.attachShadow({ mode: "open" });
  this.styleRef = document.createElement("style");
  this.slotRef = document.createElement("slot");
  this.parser = new DOMParser();
 }
 
 connectedCallback() {
  this.styleRef.textContent =
  this.styles ? this.styles() : null ;
   
  this.templateRender();
  EventListenerResolver(this);
  
  this.shadow.dispatchEvent(onInitDispatcher);
 }
 
 attributeChangedCallback(attr, prev, next) {
  if(prev !== next) { 
   this[attr] = next;
   this.updateTemplate(attr, next);
  }
 }
 
 static get observedAttributes() {
  return this.prototype.observed ?? [];
 }
 
 templateRender() {
  this.shadow.appendChild(this.styleRef);
  this.shadow.appendChild(this.slotRef);
  
  this.slotRef.innerHTML = this.template();
 }
 
 updateTemplate(attr, next) {
  const vdom = this.parser
  .parseFromString(this.template(), 'text/html');
   
  const vmatch = vdom
  .querySelectorAll(`[data-attr="${attr}"]`);

  if (vmatch.length === 0) {
   this.slotRef.innerHTML = this.template();
   return;
  }

  const match = this.shadow
  .querySelectorAll(`[data-attr="${attr}"]`);

  if (match.length !== vmatch.length) {
   this.slotRef.innerHTML = this.template();
   return;
  }

  match.forEach((elem, index) => {
   elem.innerHTML = vmatch[index].innerHTML;
  });
 }

}