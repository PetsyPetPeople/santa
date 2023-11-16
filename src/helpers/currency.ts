// const price = 147741.15;
// $147,741.15

export const dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  useGrouping: true,
  maximumSignificantDigits: 3,
});
