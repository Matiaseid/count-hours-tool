import React, { useState } from 'react';

import './TotalHours.css';


function TotalHours(props) {

  const {
    timeData // Can be null
  } = props;

  return (
    <div id='TotalHours'>

      <span>Total hours: </span>
      <span>{ timeData ? timeData.totalHours : '0' }</span>

    </div>
  )
}


class TimeData {

  hourDecimals = [];
  timeStrings = [];
  totalHours = 0;

  constructor(timeStrings) {  // Strings of form "h...h:mm" or "h...h"

    this.timeStrings = timeStrings;

    timeStrings.forEach( timeString => {

      const [hoursString, minutesString] = timeString.split(':'),
        hours =   parseInt(hoursString),
        minutes = parseInt(minutesString);


      let hourDecimal;

      if (minutes) {
        hourDecimal = hours + minutes * (1/60);

      } else {
        hourDecimal = hours;
      }

      this.hourDecimals.push(hourDecimal);
      this.totalHours += hourDecimal;
    });
  }
}

export { TotalHours, TimeData };
