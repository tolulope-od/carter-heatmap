/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
import CalendarHeatMap from 'react-calendar-heatmap';

import { getTransactionsProfit, sortTransactions } from '../helpers/transactionHelper';
import 'react-calendar-heatmap/dist/styles.css';

import transactions from '../data/transactions-carter.json';
import '../styles/grid.css';

function Grid() {
  const sortedTransactions = sortTransactions(transactions);
  const transactionDetails = getTransactionsProfit(sortedTransactions);
  const t = [];
  Object.values(transactionDetails).forEach(trans => {
    t.push(trans);
  });
  return (
    <div className="grid">
      <h1 className="grid-heading">Financial Transaction HeatMap</h1>
      <CalendarHeatMap
        startDate={moment('2019-01-01')}
        endDate={moment('2019-12-31')}
        values={t}
        showWeekdayLabels={true}
        weekdayLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }

          if (value.profit < 100) {
            return 'color-scale-5';
          }
          if (value.profit < 500) {
            return 'color-scale-7';
          }

          if (value.profit > 1000) {
            return 'color-scale-4';
          }

          if (value.profit > 100) {
            return 'color-scale-2';
          }

          if (value.profit > 10) {
            return 'color-scale-1';
          }

          if (value.profit > 500) {
            return 'color-scale-3';
          }
        }}
      />
    </div>
  );
}

export default Grid;
