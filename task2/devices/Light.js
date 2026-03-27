import { Device } from "./Device.js";

export class Light extends Device {
  constructor(name) {
    super(name, "light");
  }

  turnOn() {
    this.updateState({ power: true });
    console.log(`${this.name} ON`);
  }

  turnOff() {
    this.updateState({ power: false });
    console.log(`${this.name} OFF`);
  }
}