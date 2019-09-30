/* eslint-disable no-param-reassign */
export function getTransactionsProfit(transaction) {
  let profit = 0;
  return transaction.reduce((accum, nextTransac) => {
    if (nextTransac.date in accum) {
      if (nextTransac.transactionType === 'debit') {
        profit -= nextTransac.amount;
        accum[nextTransac.date] = { date: nextTransac.date, profit };
      } else {
        profit += nextTransac.amount;
        accum[nextTransac.date] = { date: nextTransac.date, profit };
      }
    } else {
      profit = nextTransac.amount;
      accum[nextTransac.date] = { date: nextTransac.date, profit };
    }
    return accum;
  }, {});
}

export const sortTransactions = transactions => {
  return transactions.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
};
