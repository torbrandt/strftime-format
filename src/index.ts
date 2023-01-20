import { MINUTES_PER_HOUR } from './constants';
import zeroPadNumber from './zero-pad-number';
import getDayOfYear from './get-day-of-year';
import getWeek from './get-week';

export default (date: Date, string: string, locale = navigator.language) => (
  string
    .replace(/%a/g, date.toLocaleDateString(locale, { weekday: 'short' }))
    .replace(/%A/g, date.toLocaleDateString(locale, { weekday: 'long' }))
    .replace(/%w/g, date.getDay().toString())
    .replace(/%d/g, zeroPadNumber(date.getDate()))
    .replace(/%-d/g, date.getDate().toString())
    .replace(/%b/g, date.toLocaleDateString(locale, { month: 'short' }))
    .replace(/%B/g, date.toLocaleDateString(locale, { month: 'long' }))
    .replace(/%m/g, zeroPadNumber(date.getMonth() + 1))
    .replace(/%-m/g, (date.getMonth() + 1).toString())
    .replace(/%y/g, date.toLocaleDateString(locale, { year: '2-digit' }))
    .replace(/%Y/g, date.getFullYear().toString())
    .replace(/%H/g, zeroPadNumber(date.getHours()))
    .replace(/%-H/g, date.getHours().toString())
    .replace(/%I/g, zeroPadNumber(date.getHours() % 12))
    .replace(/%-I/g, (date.getHours() % 12).toString())
    .replace(/%p/g, date.toLocaleTimeString(locale, { hour12: true }).replace(/[^A-Za-z]/g, ''))
    .replace(/%M/g, zeroPadNumber(date.getMinutes()))
    .replace(/%-M/g, date.getMinutes().toString())
    .replace(/%S/g, zeroPadNumber(date.getSeconds()))
    .replace(/%-S/g, date.getSeconds().toString())
    .replace(/%f/g, zeroPadNumber(date.getMilliseconds()))
    .replace(/%z/g, `${zeroPadNumber(date.getTimezoneOffset() / MINUTES_PER_HOUR)}${zeroPadNumber(date.getTimezoneOffset() % MINUTES_PER_HOUR)}`)
    .replace(/%Z/g, date.toLocaleDateString(locale, {
      day: '2-digit',
      timeZoneName: 'short',
    }).slice(4))
    .replace(/%j/g, zeroPadNumber(getDayOfYear(date)))
    .replace(/%-j/g, getDayOfYear(date).toString())
    .replace(/%U/g, zeroPadNumber(getWeek(date)))
    .replace(/%W/g, getWeek(date, true).toString())
    .replace(/%c/g, date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }))
    .replace(/%x/g, date.toLocaleDateString())
    .replace(/%X/g, date.toLocaleTimeString())
    .replace(/%%/g, '%')
);
