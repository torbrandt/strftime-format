# strftime-format

Takes in a Date object and a string and replaces all [strftime C-type time variables](https://strftime.org/) in the string with the corresponding data from the Date object.

## Installation
```sh
yarn add strftime-format
```

## Syntax
```js
strftimeFormat(date, string);
strftimeFormat(date, string, locale);
```

### Parameters
`date`
> A Date object

`string`
> A string containing strftime C-type time variables. List of supported variables here: https://strftime.org/

`locale` (optional)
> A locale string


### Example
```js
import strftimeFormat from 'strftime-format';

const date = new Date();

const dateString = strftimeFormat(date, '%A %-d. %B, %Y');
const germanDateString = strftimeFormat(date, '%A %-d. %B, %Y', 'de-DE');
```