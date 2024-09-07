import { WebComponent, CustomElement, template, stylesheet } from "/web";

@WebComponent("app-title")
export class AppTitle extends CustomElement {
 @template() appTemplate() {
  return `<h1>App title</h1>`
 }
}