function converter(sum, sourceCurrency, targetCurrency) {
  // "RUB", "USD", "EUR"
  const rateUSD2RUB = 89.35;
  const rateEUR2RUB = 96.85;
  let sumRUB = 0;

  switch (sourceCurrency) {
    case "RUB":
      sumRUB = sum;
      break;
    case "USD":
      sumRUB = sum * rateUSD2RUB;
      break;
    case "EUR":
      sumRUB = sum * rateEUR2RUB;
      break;
    default:
      return null;
  }

  switch (targetCurrency) {
    case "RUB":
      return sumRUB;
    case "USD":
      return Math.floor(sumRUB / rateUSD2RUB);
    case "EUR":
      return Math.floor(sumRUB / rateEUR2RUB);
    default:
      return null;
  }
}

const result = converter(1000, "RUB", "USD");
console.log(result);
