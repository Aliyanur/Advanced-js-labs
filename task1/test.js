import ConfigManager from "./singleton.js";
import config from "./config.js";

// Test class-based singleton
const instance1 = ConfigManager.getInstance();
const instance2 = ConfigManager.getInstance();

console.log("Same instance:", instance1 === instance2); // true

instance1.set("appName", "MyApp");
console.log("From instance2:", instance2.get("appName")); // MyApp

// Test using new keyword
const instance3 = new ConfigManager();
console.log("Still same instance:", instance1 === instance3); // true

// Test module singleton
config.set("version", "1.0.0");
console.log("Module config:", config.get("version"));