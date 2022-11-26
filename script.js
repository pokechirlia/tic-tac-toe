//add elements from html
const options = document.querySelectorAll(".option");
const strike = document.getElementById("strike");
const message_box = document.getElementById("message-box");
const winner_name_box = document.getElementById("winner-name");
const restart_button = document.getElementById("restart-button");

//script attributes
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let is_X_turn = true;

//set up functions
options.forEach((option) => option.addEventListener('click', run));
restart_button.addEventListener('click', run);

function run(){
    console.log("a");
}

