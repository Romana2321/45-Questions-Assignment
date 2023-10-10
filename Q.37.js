"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message on the shirt is "${message}".`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "We love Pakistan and we are proud to be pakistani");
