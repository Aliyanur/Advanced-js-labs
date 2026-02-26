class PaymentAdapter {
    constructor(legacyGateway) {
        this.legacyGateway = legacyGateway;
    }

    charge({ amount, currency, cardToken }) {
        // adapt modern interface to legacy one
        return this.legacyGateway.processPayment(
            cardToken,
            amount,
            currency
        );
    }
}

// Demo
const adapter = new PaymentAdapter(LegacyBankGateway);
const result = adapter.charge({
    amount: 15000,
    currency: 'KZT',
    cardToken: '4111111111111111'
});
console.log(result);