// Cycle colors across an MSI laptop keyboard
// Hal Pomeranz (hal@deer-run.com), 2015-04-09

var keyboard = require('msi-keyboard');

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var numcolors = colors.length;
var i = 0;

setInterval(
function () {
    var left = i % numcolors;
    var middle = (i+1) % numcolors;
    var right = (i+2) % numcolors;
    i++;

    keyboard.color('left', colors[left]);
    keyboard.color('middle', colors[middle]);	
    keyboard.color('right', colors[right]);
}, 
1000);

