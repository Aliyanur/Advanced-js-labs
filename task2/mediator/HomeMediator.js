export class HomeMediator {
    constructor() {
      this.devices = new Map();
    }
  
    registerDevice(device) {
      this.devices.set(device.name, device);
      device.setMediator(this);
    }
  
    notify(sender, state) {
      console.log(`[Mediator] ${sender.name} changed`, state);
    }
  }