Main = [];
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;
Main.NumInGame = Words.length;

Main.Word = "";
Main.WordU = "";

//functions

var Answers = ['apple','banana','orange','plum','pear','kiwi','watermelon', 'pineapple', 'honey dew', 'cherry', 'avocado', 'nectarine', 'apricot', 'cantaloupe', 'grapefruit', 'grape', 'lemon', 'lime', 'mango', 'papaya', 'peach'];
var Letters = /^[a-zA-Z]*$/; 
var AnswersLetters = document.getElementsByClassName("answer_char");

onload = init;
function init(){

Main.Pullword = function{}{
    Main.Word = Answers [(Math.floor(Math.random()*Main.NumInGame))];
}

Main.SetUnderline = function{}{
    Main.Pullword();
    for (i=0; i<Main.Word.length; i++){
        Main.WordArray[i] = Main.Word.CharAt(i);
        Main.WordUArray[i] = "_";
    }
Main.WordU = Main.WordUArray.join("");
document.getElementById("WORD").innerHTML = Main.WordU;
document.getElementById("numLetters").innerHTML = Main.Word.length;
document.getElementById("guess_button").onclick = function enter() {
    var userGuess = document.getElementById("guess_text").value;
}

Main.UpdateLetter = function(letter){
    Main.Changes = 0;
    for(i = 0; i<Main.Word.length; i++){
        Main.WordArray[i] = Main.Word.CharAt(i);
        if(Main.Word.CharAt(i) == letter){
            Main.WordUArray[i] = letter;
            Main.Changes += 1;
        }
    }

    if(Main.Changes < 1){
        Main.Lives -=1;
        document.getElementById("lives").innerHTML = Main.Lives;
    }

    Main.WordU = MainWordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;

    Main.Word1 = Main.WordArray.join("");
    Main.Word2 = Main.WordUArray.join("");

    if(Main.Word1 == MainWord2){
        Alert("You Won! Loading New Word");
        window.location.reload();
    }

    if(Main.Lives < 1){
        document.getElementById("WORD").innerHTML == Main.Word1;
        alert("No More Lives, Please Try Again.");
        window.location.reload();
    }
}

Main.Pullword();
Main.SetUnderline();