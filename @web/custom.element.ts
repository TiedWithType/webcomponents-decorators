import { EventListenerResolver } from "./events";
import { onInitDispatcher } from "./hooks";

export class CustomElement extends HTMLElement {
 constructor(...args) {
  super(...args);
  this.shadow = this.attachShadow({ mode: "open" });
  this.styleRef = document.createElement("style");
  this.host = document.createElement("slot");
 }
 
 connectedCallback() {
  if(this.styles)
   this.styleRef.textContent = this.styles();
   
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
  this.shadow.appendChild(this.host);
  
  this.host.innerHTML = this.template()
 }
 
 updateTemplate(attr, next) {
  if (typeof this.template === 'function') {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(this.template(), 'text/html');
    const newElements = parsedDocument.querySelectorAll(`[data-attr="${attr}"]`);

    if (newElements.length > 0) {
     const currentElements = this.shadow.querySelectorAll(`[data-attr="${attr}"]`);
    if (currentElements.length === newElements.length) {
     
        currentElements.forEach((currentElement, index) => {
          currentElement.innerHTML = newElements[index].innerHTML;
        });
      } else {
        this.host.innerHTML = this.template()
      }
    } else {  
      this.host.innerHTML = this.template()
    }
  }
}


}