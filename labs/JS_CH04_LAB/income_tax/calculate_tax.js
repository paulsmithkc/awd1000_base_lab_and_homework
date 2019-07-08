"use strict";
var $ = function (id) {
    return document.getElementById(id);
};



window.onload = function () {
    $("calculate").onclick = processEntry;
};