export const Service = () => <T extends Function>(constructor: T) => {
 let instance: T;

 const handler = {
  construct(target: T, args: any[]) {
   if (!instance)
    instance = Reflect.construct(target, args);

   return instance;
  },
 };
 
 class ServiceClass extends constructor {
  listeners = [];
  
  constructor(...args) {
   super(...args);
   
   Reflect.ownKeys(this).forEach(key => {
    let orig = this[key];
    
    Reflect.defineProperty(this, key, {
     get: () => {
      return orig;
     },
     set: v => {
      orig = v;
      this.listeners.forEach(cb => cb(v, key))
     }
    })
   })
  }
  
  subscribe(cb) {
   this.listeners.push(cb)
  }
 }

 return new Proxy(ServiceClass, handler);
}