export const EventListener = event => (target, key, desc) => {
 Reflect.set(desc.value, "__EventListener", event);
}

export const EventListenerResolver = target => {
 Reflect.ownKeys(Reflect.getPrototypeOf(target))
  .filter(k => target[k].__EventListener )
  .map(k => target.shadow.addEventListener(target[k].__EventListener, target[k].bind(target)))
}