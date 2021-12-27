"use strict"
// #### Light Theme

// - White (BG): hsl(0, 0%, 100%)
// - Very Pale Blue (Top BG Pattern): hsl(225, 100%, 98%)
// - Light Grayish Blue (Card BG): hsl(227, 47%, 96%)
// - Dark Grayish Blue (Text): hsl(228, 12%, 44%)
// - Very Dark Blue (Text): hsl(230, 17%, 14%) */


let body_bg = document.querySelector("body");
let switcher = document.querySelector(".switch");
let header_bg = document.querySelector("#social-header-area");
let board_cards = document.querySelectorAll(".card");
let overview_cards = document.querySelectorAll(".overview-card-bg")
let tf = document.querySelector(".color-change");
let overview_header = document.querySelector(".header-change");



switcher.addEventListener("change", e => {
    if (e.target.checked === true) {
        header_bg.style.backgroundColor = "hsl(225, 100%, 98%)";
        body_bg.style.backgroundColor = "hsl(0, 0%, 100%)";
        body_bg.style.color = "hsl(230, 17%, 14%)";
        board_cards.forEach(e => {
            e.style.backgroundColor = "hsl(227, 47%, 96%)";
        });
        tf.style.color = "hsl(228, 12%, 44%)";
        overview_header.style.color = "hsl(228, 12%, 44%)";
        overview_cards.forEach(e => {
            e.style.backgroundColor = "hsl(227, 47%, 96%)";
        });



    } else {
        if (e.target.checked === false) {
            header_bg.style.backgroundColor = "hsl(232, 19%, 15%)";
            body_bg.style.backgroundColor = "hsl(230, 17%, 14%)";
            board_cards.forEach(e => {
                e.style.backgroundColor = "hsl(228, 28%, 20%)";
            });
            body_bg.style.color = "#FFF";
            overview_header.style.color = "#FFF";
            overview_cards.forEach(e => {
                e.style.backgroundColor = "hsl(228, 28%, 20%)";
            });
        }
    }
});

