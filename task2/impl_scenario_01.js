class AppConfig {
    constructor() {
        if (AppConfig._instance) {
            return AppConfig._instance;
        }

        this.settings = {
            apiBaseUrl: 'https://api.example.com/v1',
            locale: 'kk-KZ',
            featureFlags: { darkMode: true, betaCheckout: false }
        };

        AppConfig._instance = this;
    }

    get(key) {
        return this.settings[key];
    }

    set(key, value) {
        this.settings[key] = value;
    }

    static getInstance() {
        if (!AppConfig._instance) {
            new AppConfig();
        }
        return AppConfig._instance;
    }
}

// Demo
const cfg1 = AppConfig.getInstance();
const cfg2 = AppConfig.getInstance();

cfg1.set('locale', 'en-US');
console.log(cfg2.get('locale')); // same object
console.log(cfg1 === cfg2); // true