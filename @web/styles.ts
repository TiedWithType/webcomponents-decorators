export const styles = () => (t, k) => {
 Reflect.set(t.prototype, 'styles', Reflect.get(t, k));
}