var target;
var guessInputText;
var guessInput;
var finished = false;
var guesses = 0;
var colors = ["black", "blue", "brown", "cyan", "gray", "green", "indigo", "lime", "orange", "pink", "purple", "red", "violet", "white", "yellow"];

function beginGame() {
	// This script is called as soon as page is loaded
	var randomNumber = Math.random() * 15;
	target = Math.floor(randomNumber);
	while (!finished) {
		guessInputText = prompt("I am thinking of one of a color out of these:\n" + colors.join(", ") + "\nWhich one is it?");
		guesses++;
		guessInput = colors.indexOf(guessInputText);
		finished = checkInput();
	}
}

function checkInput() {
	// This function checkes the validity of input

	/* If the entered text matches the target color */
	if (guessInput == target) {
		alert("You got it! The color was " + colors[target] + ".\n\nIt took you " + guesses + " guesses to get the number!");
		document.body.style.backgroundColor = colors[target];
		document.getElementById("text").innerHTML = "Thank you for playing the game!";
		return true;
	}

	/* If entered text is not a color from the given set or not a color itself */
	if (guessInput == -1 ) {
		alert("I couldn't recognize the color!\nPlease enter a color from the given set only.");
		return false;
	}

	/* If enetered text is alphabetically lower than the target */
	if (guessInput < target) {
		alert("Sorry! Wrong guess!\nHint: Your input is alphabetically lower than the correct color.");
		return false;
	}

	/* If enetered text is alphabetically higher than the target */
	if (guessInput > target) {
		alert("Sorry! Wrong guess!\nHint: Your input is alphabetically higher than the correct color.");
		return false;
	}
}