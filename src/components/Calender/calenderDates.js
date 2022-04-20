const CalenderDates = () => {
  const month = 3;
  const year = 2022;
  let date = new Date(Date.UTC(year, month, 1));
  let months = [];
  let days = [];
  let calenderDates = [];

  //create an array of days from the previous, current, and next month
  while (date.getUTCMonth() <= month + 2) {
    months.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }

  //loop to find the day of the current month and the seven days before, and after the current month
  for (let i = 0; i < months.length; i++) {
    if (months[i].getMonth() === month + 1 && months[i].getDate() === 1) {
      days.push(months[i]);

      for (let j = i - 1; j >= i - 7; j--) {
        days.push(months[j]);
      }

      days.sort((a, b) => {
        return a - b;
      });
    } else if (months[i].getMonth() === month + 1) {
      days.push(months[i]);
    } else if (months[i].getMonth() === month + 2 && months[i].getDate() === 1) {
      for (let k = i; k <= i + 6; k++) {
        days.push(months[k]);
      }
      break;
    }
  }

  //loop to find the day of the current month starting from monday
  for (let x = 0; x < days.length; x++) {
    if (days[x].getDay() === 1 && days[x].getDate() < 28) {
      for (let y = x; y - x < 42; y++) {
        calenderDates.push(days[y]);
      }
      break;
    } else if (days[x].getDay() === 1 && days[x].getDate() > 28) {
      for (let y = x; y - x < 35; y++) {
        calenderDates.push(days[y]);
      }
      break;
    }
  }
  return calenderDates;
};

module.exports = CalenderDates;
