import {
  MILLISECONDS_PER_WEEK,
  DAYS_PER_WEEK,
  THURSDAY_NUMBER,
} from './constants';

export default (initialDate: Date, mondayIsFirstWeekDay = false) => {
  const date = new Date(initialDate.getTime());

  const day = mondayIsFirstWeekDay
    ? (date.getDay() + (DAYS_PER_WEEK - 1)) % DAYS_PER_WEEK
    : date.getDay();

  date.setDate(date.getDate() - day + 3);

  const firstThursday = date.getTime();

  date.setMonth(0, 1);

  if (date.getDay() !== THURSDAY_NUMBER) {
    date.setMonth(0, 1 + ((THURSDAY_NUMBER - date.getDay()) + DAYS_PER_WEEK) % DAYS_PER_WEEK);
  }

  return date.getFullYear() === initialDate.getFullYear()
    ? 1 + Math.ceil((firstThursday - date.getTime()) / MILLISECONDS_PER_WEEK)
    : 0;
};
