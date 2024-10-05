import { WebComponent, CustomElement, styles, template, Input, EventListener, onInit } from "../@web/decorators";
import { Settings } from "./app-settings.service";

@WebComponent("app-settings") export class AppSettings extends CustomElement {
 @styles()
static appStyle() {
  return `
    :host {
      inline-size: 100%;
      display: flex;
      gap: 10px;
    }

    section {
      position: relative;
    }

    input {
      inline-size: 100%;
      box-sizing: border-box;
      font-family: inherit;
      padding: 10px;
      border: solid 1px;
      border-radius: 5px;
      
       @media (prefers-color-scheme: dark) {
  background: var(--dark);
  color: var(--light);
 }
      
      &+label {
        position: absolute;
        top: -7px;
        left: 7px;
        font-size: 75%;
        background: #fff;
        padding-inline: 5px;
        transition: color 0.3s ease;
        
         @media (prefers-color-scheme: dark) {
  background: var(--dark);
  color: var(--light);
 }
      }

      &:focus, &:hover {
        overflow: 0;
        outline: 0;
      }

      &:focus-within + label {
        color: var(--accentColor);
      }

      @media (prefers-color-scheme: dark) {
        background: #212121;
        color: #fff;

        &+label {
          background: #212121;
          color: #fff;
        }
      }
    }
  `;
}

 
 settings = new Settings();
 @Input() pool = this.settings.pool;
 @Input() size = this.settings.size;
 
 @EventListener("input") atInput({ target }) {
  this.settings[target.dataset.attr] = target.value;
  //this.settings.imageUrl = this.settings.seedUrl;
 }
 
 @template() static appTemplate() {
  return `
   <section>
    <input data-attr="pool" type="tel" maxlength="9" value=${this.pool} />
   <label for="">pool</label>
   </section>
   <section>
    <input data-attr="size" value=${this.size} type="tel" maxlength="4" />
    <label for="">size</label>
   </section>
  `
 }
}