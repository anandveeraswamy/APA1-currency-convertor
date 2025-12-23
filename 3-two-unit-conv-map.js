/**
 * Currency converter using a data-driven (map-based) approach.
 * Supports GBP and USD only.
 */

// --------------------
// Validation & normalisation helpers
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

const gbpToUsd = (amount) => amount * 1.25;
const usdToGbp = (amount) => amount / 1.25;

// --------------------
// Conversion map
// --------------------

const conversionMap = {
  GBP: {
    USD: gbpToUsd,
  },
  USD: {
    GBP: usdToGbp,
  },
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

  // Validate conversion path
  if (!conversionMap[from] || !conversionMap[from][to]) {
    throw new Error("Unsupported currency conversion.");
  }

  const conversionFn = conversionMap[from][to];
  return conversionFn(numericAmount);
};

console.log(convertCurrency(100, "GBP", "USD")); // 125
console.log(convertCurrency(50, "usd", "gbp"));  // 40
console.log(convertCurrency(10, "GBP", "GBP"));  // 10
