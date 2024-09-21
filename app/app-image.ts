import { WebComponent, CustomElement, Input, EventListener, template, stylesheet } from "/web";
import { Settings } from "./app-settings.service";

@WebComponent("app-image")
export class AppImage extends CustomElement {
 @Input() src = Settings.defaultImage;
 settings = new Settings();
 
 async imageValid(src) {
  return new Promise(resolve => {
   const image = new Image();
   
   image.onload = () => resolve(src);
   image.onerror = () => resolve(Settings.defaultImage);
   image.src = src;
  });
 }

 @EventListener("ready-event") readyEvent() {
  this.settings.subscribe(async result =>
   this.src = await this.imageValid(result));
 }
 
 @stylesheet() appStyle() {
  return `
   img {
    max-inline-size: 250px;
    min-block-size: 250px;
    border-radius: 5px;
   }
  `
 }
 
 @template() appTemplate() {
  return `
   <img src=${this.src} alt=${this.src} />
  `
 }
}