const humanizeCurrency = ({ number, currency = "USD" }) =>
  number.toLocaleString("en-US", {
    style: "currency",
    currency: currency
  });

export default humanizeCurrency;
