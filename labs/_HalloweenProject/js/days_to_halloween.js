'use strict';

const dayDescription = 'Halloween';
const dayBefore = 'Halloween Eve';

const today = new Date();
let year = today.getYear();

// eslint-disable-next-line prefer-template
if (navigator.appName === 'Microsoft Internet Explorer' && year < 2000) year = '19' + year.toFixed(0);
if (navigator.appName === 'Netscape') year = 1900 + year;

const date = new Date(`October 31, ${year}`);
const diff = date.getTime() - today.getTime();
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.write('<center><p>');

if (days > 1) document.write(`There are ${days + 1} days until ${dayDescription}!`);
else if (days === 1) document.write(`Tommorrow is ${dayBefore}!`);
else if (days === 0) document.write(`Today is ${dayBefore}!`);
else if (days === -1) document.write(`It's ${dayDescription}!`);
else if (days < -1) document.write(`${dayDescription} was ${(days + 1) * -1} ${days < -2 ? ' days' : ' day'} ago!`);

document.write('</p></center>');
