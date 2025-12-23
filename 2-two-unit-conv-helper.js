/**
 * Currency conversion utility using helper functions and if/else only.
 * Supported currencies: GBP, USD
 * Exchange rates are fixed for teaching purposes.
 */

// --------------------
// Validation helpers
// --------------------

const parseAndValidateAmount = (amount) => {
  const numericAmount = Number(amount);

  if (!Number.isFinite(numericAmount)) {
    throw new Error("Amount must be a valid number.");
  }

  return numericAmount;
};

const normalizeCurrency = (currency) => {
  return String(currency).trim().toUpperCase();
};

// --------------------
// Conversion helpers
// --------------------

const convertFromGBP = (amount, toCurrency) => {
  if (toCurrency === "USD") {
    return amount * 1.25;
  } 

  throw new Error("Unsupported target currency.");
};

const convertFromUSD = (amount, toCurrency) => {
  if (toCurrency === "GBP") {
    return amount / 1.25;
  } 

  throw new Error("Unsupported target currency.");
};

// --------------------
// Main conversion function
// --------------------

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const numericAmount = parseAndValidateAmount(amount);
  const from = normalizeCurrency(fromCurrency);
  const to = normalizeCurrency(toCurrency);

  // Same currency: no conversion required
  if (from === to) {
    return numericAmount;
  }

  if (from === "GBP") {
    return convertFromGBP(numericAmount, to);
  } else if (from === "USD") {
    return convertFromUSD(numericAmount, to);
  }

  throw new Error("Unsupported source currency.");
};

console.log(convertCurrency(100, "GBP", "USD")); // 125
console.log(convertCurrency(10, "GBP", "GBP"));  // 10

// export default convertCurrency;
module.exports = convertCurrency;
