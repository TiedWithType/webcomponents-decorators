export const Input = () => (target, key) => {
 if (!target.constructor.prototype.observed)
  target.constructor.prototype.observed = []
 
 target.constructor.prototype.observed.push(key);

 Object.defineProperty(target, key, {
  get() { return this.getAttribute(key) },
  set(value) { this.setAttribute(key, value) },
 });
};