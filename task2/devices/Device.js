export class Device {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.state = { power: false };
      this.mediator = null;
    }
  
    setMediator(mediator) {
      this.mediator = mediator;
    }
  
    updateState(newState) {
      this.state = { ...this.state, ...newState };
      if (this.mediator) {
        this.mediator.notify(this, this.state);
      }
    }
  }