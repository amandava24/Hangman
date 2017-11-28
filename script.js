var names = ["amanda", "martina", "talia"];
var clothing = ["sweatshirt", "hoodie", "shirt", "pants"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var cword = "";
var prevGuesses = [];
var turns = 20;
var unders = "";



function startGame(){
    prevGuesses = [];
    turns = 20;
    document.getElementById("guessLetter").innerHTML = "";
    document.getElementById("turns").innerHTML = "Turns left: " + turns;
    var category = document.getElementById("chooseCategory").value;
    if(category == "1"){
        var category = names;
    }
    if(category == "2"){
        var category = clothing;
    }
    if(category == "3"){
        var category = alphabet;
    }
    cword = category[Math.floor(Math.random() * category.length)];
    console.log(cword);
    printWord();
}

function printWord(){
    unders = "";
    for(var i = 0; i <cword.length; i++){
        if(prevGuesses.indexOf(cword[i]) > -1){
            unders += cword[i];
        }else{
            unders += " _";
        }
    }
    console.log(unders);
    document.getElementById("finunder").innerHTML = unders;
}

function guessLetter(){
    var tries = 20;
    var letter = document.getElementById("guessLetter").value;
    if(prevGuesses.indexOf(letter) == -1){
        prevGuesses.push(letter);
        if(cword.indexOf(letter) == -1){
            turns--;
        }
    }
    document.getElementById("output").innerHTML = prevGuesses;
    document.getElementById("turns").innerHTML = "Turns left: " + turns;

    if(turns <= 0){
        return document.getElementById("turns").innerHTML = "You lost :(";
    }
    console.log(prevGuesses);
    console.log(unders);
    if(unders.indexOf("_") == -1){
        return document.getElementById("turns").innerHTML = "You won :)";
    }
    printWord();
}


