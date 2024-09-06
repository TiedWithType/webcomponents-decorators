export const EventListener = event => (target, key, desc) => {
 desc.value.__EventListener = event;
}

export const EventListenerResolver = target => {
 Reflect.ownKeys(Reflect.getPrototypeOf(target))
  .filter(k => target[k].__EventListener )
  .map(k => target.addEventListener(target[k].__EventListener, target[k].bind(target)))
}