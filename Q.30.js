"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["Maqbool", "Salaar", "Saad", "Ahmed", "Kashif"];
for (let guest of usernames) {
    if (guest === 'Maqbool') {
        console.log('Hello Maqbool, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${guest}, thank you for logging in again.`);
    }
}
