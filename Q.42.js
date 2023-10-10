"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicians);
show_magicians(magicians);
