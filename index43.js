"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    const greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicians = make_great([...magicians]);
show_magicians(magicians);
console.log("---");
show_magicians(greatMagicians);
