import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-image")
export class AppImage extends CustomElement {
 settings = new Settings();
 @Input() src = this.settings.imageUrl;
 
 async imageValid(src) {
  return new Promise(resolve => {
   const image = new Image();
   
   image.onload = () => resolve(src);
   image.onerror = () => resolve(Settings.defaultImage);
   image.src = src;
  });
 }

 @onInit() readyEvent(e) {
  this.settings.subscribe(async (result, key) => {
   if (key != "imageUrl") return;
   this.src = await this.imageValid(result);
  });
 }
 
 @styles() static appStyle() {
  return `
   :host {
    z-index: 999;
   }
  
   img {
    max-inline-size: 250px;
    min-block-size: 250px;
    border-radius: 5px;
    transition: .3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    
    &:hover {
     scale: 1.4;
     border-radius: 50%;
    }
   }
  `
 }
 
 @template() static appTemplate() {
  return `
   <img loading="lazy" src=${this.src} alt=${this.src} />
  `
 }
}