let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromDollarToYen(amount) {
    return amount * oneEuroIs.JPY;
}

function fromEuroToDollar(amount) {
    return amount * oneEuroIs.USD;
}

function fromYenToPound(amount) {
    return amount * oneEuroIs.GBP;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }; 