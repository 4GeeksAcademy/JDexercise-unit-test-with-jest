

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"].toFixed(2);
    // Retornamos el valor en dólares
    return valueInDollar;
};

const fromDollarToYen = function(valueInDollar) {
    let conversion = ((1*oneEuroIs["JPY"])/oneEuroIs["USD"].toFixed(2))
    let valueInYen = valueInDollar * conversion
    return valueInYen;
};
const fromYenToPound = function(valueInYen) {
   let conversion = ((1*oneEuroIs["GBP"])/oneEuroIs["JPY"].toFixed(2))
    let valueInPound = valueInYen * conversion
    return valueInPound;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};

