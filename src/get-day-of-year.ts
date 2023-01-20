import {
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE,
  MINUTES_PER_HOUR,
  HOURS_PER_DAY
} from './constants';

export default (date: Date) => {
  const difference = date.getTime() - new Date(date.getFullYear(), 0, 0).getTime();

  return Math.floor(
    difference / MILLISECONDS_PER_SECOND / SECONDS_PER_MINUTE / MINUTES_PER_HOUR / HOURS_PER_DAY,
  );
};