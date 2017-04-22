
var randomAnswer;
var randomNumber;

function getAnswer() {
  var answers = [
    "Not today",
    "As you wish",
    "Do it, do it right now",
    "Ask again later",
    "Unlikely",
    "Nope",
    "Yes",
    "Without a doubt",
    "YOLO",
    "I've got a headache",
    "Don't be stupid",
    "Have at it"
  ];
  randomNumber = Math.floor(Math.random()*answers.length);
 }
var askButton = document.getElementById("generate");

askButton.addEventListener("click", function() {
  getAnswer();
});

//Clear out the input after the answer -- innerTEXT?


//need to display history of answers
