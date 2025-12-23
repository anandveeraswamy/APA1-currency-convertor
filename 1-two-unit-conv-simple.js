/**
 * Simple currency converter (monolithic version).
 * Converts between GBP and USD only.
 */

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  // Convert amount to number
  const numericAmount = Number(amount);
  if (!Number.isFinite(numericAmount)) {
    throw new Error("Amount must be a valid number.");
  }

  // Normalise currency codes
  const from = String(fromCurrency).toUpperCase();
  const to = String(toCurrency).toUpperCase();

  // Same currency: no conversion needed
  if (from === to) {
    return numericAmount;
  }

  // GBP to USD
  if (from === "GBP" && to === "USD") {
    return numericAmount * 1.25;
  }

  // USD to GBP
  if (from === "USD" && to === "GBP") {
    return numericAmount / 1.25;
  }

  // Unsupported currency or conversion
  throw new Error("Unsupported currency conversion.");
};

console.log(convertCurrency(100, "GBP", "USD")); // 125
console.log(convertCurrency(50, "USD", "GBP"));  // 40
console.log(convertCurrency(10, "GBP", "GBP"));  // 10
