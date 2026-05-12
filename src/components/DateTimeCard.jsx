import React from 'react';

const godziny = new Date().getHours();
const minuty = new Date().getMinutes();
const sekundy = new Date().getSeconds();
const dzien = new Date().getDate();
const miesiac = new Date().getMonth() + 1;
const rok = new Date().getFullYear();


const DateTimeCard = () => {
  return (
   <div className="date-time-card">
      <h2>Data i Godzina</h2>
      <p>{dzien}.{miesiac}.{rok} {godziny}:{minuty}:{sekundy}</p>
    </div>
  );
};

export default DateTimeCard;