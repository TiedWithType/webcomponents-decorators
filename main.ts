const WebComponent = selector => target => customElements.define(selector, target)

class CustomElement extends HTMLElement {
 constructor(...args) {
  super(...args);
  this.shadow = this.attachShadow({ mode: "open" });
 }
 
 connectedCallback() {
  this.templateRender();
  
  Reflect.ownKeys(Reflect.getPrototypeOf(this))
  .filter(k => this[k].__EventListener )
  .map(k => this.addEventListener(this[k].__EventListener, this[k].bind(this)))
 }
 
 attributeChangedCallback(attr, prev, next) {
  if(prev !== next) { 
   this[attr] = next;
   this.templateRender();
  }
 }
 
 static get observedAttributes() {
  return this.prototype.observed ?? [];
 }
 
 templateRender() {
  this.shadow.innerHTML = this.render();
  if(this.styles) { 
   this.shadow.innerHTML +=
  `<style>${this.styles()}</style>`;
  }
 }
}
 
const Input = () => (target, key) => {
 if (!target.constructor.prototype.observed)
  target.constructor.prototype.observed = []
 
 target.constructor.prototype.observed.push(key);

 Object.defineProperty(target, key, {
  get() { return this.getAttribute(key) },
  set(value) { this.setAttribute(key, value) },
 });
};

const EventListener = event => (target, key, desc) => {
 desc.value.__EventListener = event;
}


@WebComponent("app-hello")
class AppHello extends CustomElement {
 @Input() message = "Click me to randomize";
 
 @EventListener("click") clickController() {
  this.message = Math.random().toString().substring(2)
 }
 
 styles() {
  return `
   :host {
    border: solid 2px;
    display: flex;
    place-items: center;
    place-content: center;
    margin: 4px
   }
  `
 }
 
 render() {
  return `
   <p>${this.message}</p>
  `
 }
}