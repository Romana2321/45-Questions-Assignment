"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...items) {
    console.log("Sandwich order:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
make_sandwich("vegetables", "Cheese");
make_sandwich("Turkey", "Lettuce", "Tomato");
make_sandwich("Chicken", "Bacon", "Avocado", "Mayo");
