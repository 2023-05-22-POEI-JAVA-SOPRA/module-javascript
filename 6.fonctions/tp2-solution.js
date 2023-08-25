// Version classique
function getPriceWithTaxes(price, taxRate) {
  return price * (1 + taxRate);
}

console.log(getPriceWithTaxes(100, 0.2)); // 120

// Version curryfiée
const getPriceWithTaxes = (taxRate) => (price) => {
  return price * (1 + taxRate);
};

const getVATPrice = getPriceWithTaxes(0.2);
const getRegionPrice = getPriceWithTaxes(0.1);

console.log(getVATPrice(100)); // 120
console.log(getRegionPrice(200)); // 220

// Autres taux de taxes
const getReducedVAT = getPriceWithTaxes(0.055);
const getSuperReducedVAT = getPriceWithTaxes(0.021);

console.log(getReducedVAT(500)); // 527.5
console.log(getSuperReducedVAT(400)); // 408

// Pipelining
const addTransportFee = (price) => price + 10;

const getFinalPrice = (price) => getVATPrice(addTransportFee(price));

console.log(getFinalPrice(500)); // 620
