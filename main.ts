import { WebComponent, CustomElement, Input, EventListener, template, stylesheet, Service, Module } from "./web";

import { AppTitle } from "./app/app-title";

@Service() class service {
 static fallback = "./fallback.jpg";
 url = "https://picsum.photos/800";
}

@WebComponent("app-image") class AppImage extends CustomElement {
 @Input() src = service.fallback;
 _service = new service();
 
 isValid(src, cb) {
  const img = new Image();
  
  img.onload = () => cb(true)
  img.onerror = () => cb(false)
  
  img.src = src;
 }
 
 @EventListener("ready-event") readyEvent() {
  this._service.subscribe(x => {
   this.isValid(x, state => { state 
    ? (this.src = x)
    : (this.src = service.fallback)
   })
  });
 }
 
 @stylesheet() appStyle() {
  return `
   img {
    max-inline-size: 250px;
    min-block-size: 250px;
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <img src=${this.src} alt=${this.src} />
  `
 }
}

@WebComponent("app-input") class AppInput extends CustomElement {
 @Input() value;
 _service = new service();
 
 @stylesheet() appStyle() {
  return `
   input {
    inline-size: 250px;
    box-sizing: border-box;
    padding: 10px
  }
  `
 }
 
 @EventListener("input") inputController(e) {
  this._service.url = e.target.value;
 }

 @template() appTemplate() {
  return `
   <input name="" type="" value=${this.value} />
  `
 }
}

@WebComponent("app-counter") class AppCounter extends CustomElement {
 @Input() current = 0;
 @Input() max = 50;
 
 _service = new service();
 
 @EventListener("ready-event") readyEvent() {
  this._service.subscribe(x => {
   this.current = x.length;
  });
 }
 
 @template() appTemplate() {
  return `
   <p> ${this.current} / ${this.max} </p>
  `
 }
}

@WebComponent("app-button") class AppButton extends CustomElement {
 _service = new service();
 @Input() disabled = false;

 @EventListener("ready-event") ready() {
  this._service.subscribe(x => {
   this.disabled = (x.length === 0);
  })
 }
 
 @EventListener("click") click() {
  alert()
 }
 
 
 
 @stylesheet() styles() {
  return `
   button {
    background: blue;
    
    &[data-disabled="true"] {
     background: red
    }
   }
  `;
 }
 
 @template() appTemplate() {
  return `
   <button data-disabled=${this.disabled} >Random</button>
  `
 }
}

@WebComponent("app-root") class AppRoot extends CustomElement {
 _service = new service();
 
 @stylesheet() appStyle() {
  return `
   :host {
    display: grid;
    place-items: center;
    place-content: center;
    grid-template-columns: repeat(1, 250px)
   }
  `
 }
 
 @template() appTemplate() {
  const { url } = this._service;
 
  return `
   <app-title></app-title>
   <app-image></app-image>
   <app-input value=${url}></app-input>
   <app-counter current=${url.length}></app-counter>
   <app-button></app-button>
  `;
 }
}

@Module([AppTitle]) class AppModule {}