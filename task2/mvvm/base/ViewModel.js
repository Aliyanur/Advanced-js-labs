export class ViewModel {
    constructor() {
      this._bindings = new Map();
    }
  
    defineProperty(name, value) {
      const subscribers = new Set();
  
      Object.defineProperty(this, name, {
        get: () => value,
        set: newValue => {
          const old = value;
          value = newValue;
          subscribers.forEach(cb => cb(newValue, old));
        }
      });
  
      this._bindings.set(name, subscribers);
    }
  
    $watch(name, cb) {
      this._bindings.get(name)?.add(cb);
    }
  }