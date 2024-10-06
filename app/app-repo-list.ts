import { WebComponent, CustomElement, styles, template } from "../@web/decorators";

@WebComponent("app-repo-list")
export class AppRepoList extends CustomElement {
 
 @styles() static appStyle() {
  return `
   :host {
    display: grid;
    grid-template-columns: 18.75rem;
    place-items: center;
    place-content: center;
    user-select: none;
    
    @media screen and (width > 39.25rem) {
     grid-template-columns: 37.5rem;
    }
   }
   
   p {
      background: var(--accentColor);
      padding: 5px;
      border-radius: 5px;
      border: solid 1px;
   }
   
   ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 15px;
    
    li {
     a {
      text-decoration: none;
      color: inherit;
      text-align: center;
     }
    }
   }
  `
 }
 
 data = [{
  title: "Random image generator",
  url: "https://wbc-rig.vercel.app"
 }]
 
 @template() static appTemplate() { return `
  <p>Some examples</p>
  <ul>
   ${this.data.map(({title, url}) => `
    <li>&gt; <a href="${url}">${title}</a> &lt;
    </li>
   `).join('')}
  </ul>
  `;}
}