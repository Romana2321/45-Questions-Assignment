"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = ['green', 'yellow', 'red'];
// Version that passes the if test
if (alien_color.indexOf('green') !== -1) {
    console.log("Congratulations! You just earned 5 points.");
}
// Version that fails the if test (no output)
if (alien_color.indexOf('green') !== -1) {
}
