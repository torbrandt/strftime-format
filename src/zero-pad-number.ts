export default (number: number) => (
  `${Math.abs(number) < 10 ? `${number < 0 ? '-' : ''}0` : ''}${Math.abs(number)}`
);