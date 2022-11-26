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
let player_X_record = [];
let player_O_record = [];   
const winning_cases = new Map([      //all winning cases with the corresponding strike type
    [[1,2,3], "strike-row-1"],
    [[4,5,6], "strike-row-2"],
    [[7,8,9], "strike-row-3"],

    [[1,4,7], "strike-column-1"],
    [[2,5,8], "strike-column-2"],
    [[7,8,9], "strike-column-3"],

    [[1,5,9], "strike-diagonal-1"],
    [[3,5,7], "strike-diagonal-2"]
    
]);

//set up functions
options.forEach((option) => option.addEventListener('click', makeMove));
restart_button.addEventListener('click', newGame);

function run(){
    console.log("a");
}

function setHover(){

//remove all X/O hover and change to the current one

    options.forEach((option) => {
        option.classList.remove("x-hover");
        option.classList.remove("o-hover");
    })

    options.forEach((option) => {
        if(option.innerHTML == "")
        {
            if(is_X_turn)
                option.classList.add("x-hover");
            else
                option.classList.add("o-hover");
        }
    })
}



function makeMove(event){

    const option = event.target;
    
    if(is_X_turn){
        option.innerText = PLAYER_X;
        is_X_turn = false;
        player_X_record.push(parseInt(option.dataset.index));
    }

    else{
        option.innerText = PLAYER_O;
        is_X_turn = true;
        player_O_record.push(parseInt(option.dataset.index));
    }

    checkWinner();
    setHover();

    

}

function checkWinner(){
    //console.log(player_X_record);
    //console.log(player_O_record);

    //X just done their turn
    if(!is_X_turn)
    {
        for(const winningCase of winning_cases.keys()){
            const result = winningCase.every(val => player_X_record.includes(val));
            if(result)
            {
                gameOver();
                return;
            }
        }
    }

    else{
        for(const winningCase of winning_cases.keys()){
            const result = winningCase.every(val => player_O_record.includes(val));
            if(result)
            {
                gameOver();
                return;
            }
        }

    }


}

function newGame(){
    setHover();
}

function gameOver(){
    message_box.className = "visible";
}

