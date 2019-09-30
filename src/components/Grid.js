/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';
import CalendarHeatMap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import transactions from '../data/transactions-carter.json';
import '../styles/grid.css';

function Grid() {
  return (
    <div className="grid">
      <h1 className="grid-heading">Financial Transaction HeatMap</h1>
      <CalendarHeatMap
        startDate={moment().subtract(moment.duration({ year: 1 }))._d}
        endDate={moment()._d}
        values={transactions}
        showWeekdayLabels={true}
        weekdayLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']}
      />
    </div>
  );
}

export default Grid;
