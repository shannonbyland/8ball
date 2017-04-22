
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
var randomNumber = Math.floor(Math.random()*answers.length);

//display the answer
var displayAnswer = document.getElementById('answer');
displayAnswer.innerTEXT = randomNumber;
 }

var askButton = document.getElementById("generate");

askButton.addEventListener("click", function() {
  getAnswer();
});


//console.log();

//Clear out the input after the answer -- innerTEXT?


//need to display history of answers
