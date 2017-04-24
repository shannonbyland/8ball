
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
displayAnswer.innerHTML = answers[randomNumber];

//Display history of answers
var list = document.getElementById('history');
var li = document.createElement('li');
li.innerHTML = answers[randomNumber];
list.appendChild(li);
}

//Clear out the input after the answer
function clearInput () {
var clearText = document.getElementById('question');
question.value= '';
}

var askButton = document.getElementById('generate');

askButton.addEventListener("click", function() {
  getAnswer();
  //answer is shown and input is immediately cleared
  clearInput();
});
