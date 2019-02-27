var words = [
  "Black",
  "White",
  "Blue",
  "Red",
  "Yellow",
  "Green",
  "Pink",
  "Orange",
  "Grey"
];

var wins = 0;
var losses = 0;
var guesses = 10;
var letterGuessed = "";

var randomWord;
var lettersInWord = [];
var numberOfletters;
var dashAndLetterHandler = [];

function reset() {
  wins = 0;
  losses = 0;
  guesses = 10;
  letterGuessed = "";

  randomWord = "";
  lettersInWord = [];
  numberOfletters = 0;
  dashAndLetterHandler = [];
}
