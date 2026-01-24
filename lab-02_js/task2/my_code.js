class DataValidator {
    constructor(rules = {}) {
        this.rules = rules;
    }

    validate(data) {
        const errors = {};

        for (const field in this.rules) {
            const value = data[field];
            const fieldRules = this.rules[field];

            if (
                fieldRules.required &&
                (value === undefined || value === null || value === '')
            ) {
                errors[field] = errors[field] || [];
                errors[field].push('Field is required');
            }

            if (
                fieldRules.minLength &&
                typeof value === 'string' &&
                value.length < fieldRules.minLength
            ) {
                errors[field] = errors[field] || [];
                errors[field].push(`Minimum length is ${fieldRules.minLength}`);
            }

            if (
                fieldRules.maxLength &&
                typeof value === 'string' &&
                value.length > fieldRules.maxLength
            ) {
                errors[field] = errors[field] || [];
                errors[field].push(`Maximum length is ${fieldRules.maxLength}`);
            }

            if (fieldRules.email && typeof value === 'string') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errors[field] = errors[field] || [];
                    errors[field].push('Invalid email format');
                }
            }
        }

        return Object.keys(errors).length === 0
            ? { valid: true }
            : { valid: false, errors };
    }
}

const rules = {
    username: { required: true, minLength: 3, maxLength: 15 },
    password: { required: true, minLength: 6 },
    email: { required: true, email: true }
};

const validator = new DataValidator(rules);

const userData = {
    username: "Aliya",
    password: "12345",
    email: "aliya.kaldibay01@gmail.com"
};

const result = validator.validate(userData);
console.log(result);