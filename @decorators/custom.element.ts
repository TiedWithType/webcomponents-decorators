import { EventListenerResolver } from "./events";
import { onInitDispatcher } from "./hooks";

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
  
  const all =
  this.shadow.querySelectorAll(`[data-bind]`);
  
  all.forEach(el => {
   el.dataset.html = el.textContent;
  })
  
  this.shadow.dispatchEvent(onInitDispatcher);
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
  const all =
  this.shadow.querySelectorAll(`[data-bind=${attr}]`);
  
  all.forEach(el => {
   if(el.tagName == "INPUT") {
    el.value = next;
   } else {
    el.textContent = next || el.dataset.html;
   }
  })
 }
}