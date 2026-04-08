export class CancellableFetcher {
    constructor() {
      this.controllers = new Map();
    }
  
    fetch(url, id) {
      const controller = new AbortController();
      this.controllers.set(id, controller);
  
      return fetch(url, { signal: controller.signal })
        .finally(() => this.controllers.delete(id));
    }
  
    cancel(id) {
      const controller = this.controllers.get(id);
      if (controller) {
        controller.abort();
      }
    }
  }