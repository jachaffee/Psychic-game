
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;

var loss = 0;

var guess = 9;

var usedLetters = [];

var computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(computerPick);


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var alphaCheck = computerChoice.indexOf(userGuess);

		if (alphaCheck === -1) {
			return;
		}

	var check = usedLetters.indexOf(userGuess);

		if (check !== -1) {
			return;
		}

	if (userGuess !== computerPick) {
		guess--;
		usedLetters.push(userGuess);
	}

	if (userGuess === computerPick) {
		win++;
		computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];
		guess = 9;
		usedLetters = [];
	}

	if (guess === 0) {
		loss++;
		usedLetters = [];
		guess = 9;
		computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	} 
	
	var print = "<p>Wins: " + win + "</p>" + "<p>Losses: " + loss + "</p>" + "<p>Guesses Left: " + guess + "</p>" + "<p>" + usedLetters + "</p>";

	document.getElementById("game").innerHTML = print;

};