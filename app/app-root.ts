import { WebComponent, CustomElement, stylesheet, template, EventListener } from "/web";

@WebComponent("app-root") export class AppRoot extends CustomElement {
 
 @stylesheet() appStyle() {
  return `
   :host {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    
    h1 {
     inline-size: min-content;
     text-align: center;
    }
     
    img {
     inline-size: 300px;
     object-fit: cover;
    }
   }
  `
 }
 
 @template() appTemplate() {
 
  return `
   <h1>WebComponents Decorators</h1>
   <img src="/assets/logo.png" alt="logo">
  `
 }
}