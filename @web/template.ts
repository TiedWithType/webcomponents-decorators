export const template = () => (t, k) => {
 Reflect.set(t.prototype, 'template', Reflect.get(t, k));
}