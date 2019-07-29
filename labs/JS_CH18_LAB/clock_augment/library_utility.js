"use strict";

myapp.utility.padSingleDigit = function(num) {
    return (num < 10) ? "0" + num : num;
};