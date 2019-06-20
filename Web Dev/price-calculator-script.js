

function calc(e) {
	var answerOne = document.querySelector("#length-answer").value;
	var answerTwo = document.querySelector("#pictures-answer").value;
	var answerThree = document.querySelector("#time-answer").value;
	var answerZero = document.querySelector("#category-answer").value;
	var finalPrice = 0;

	if (answerZero == "corporate")  {
		finalPrice += 150;
	}
	if (answerZero == "travel") {
		finalPrice +=50;
	}
	if (answerOne == "value1") {
		finalPrice += 60;
	}
	if (answerOne == "value2") {
		finalPrice += 120;
	}
	if (answerOne == "value3") {
		finalPrice += 180;
	}
	if (answerOne == "value4") {
		finalPrice += 240;
	}
	if (answerOne == "value5") {
		finalPrice += 300;
	}
	if (answerOne == "value6") {
		finalPrice += 360;
	}
	if (answerTwo == "yes") {
		finalPrice += 20;
	}
	if (answerThree == "hours") {
		finalPrice += 100;
	}

	//alert(finalPrice);
	e.preventDefault();

	document.querySelector(".status").innerHTML = "Your price: " + finalPrice + "$";

}

var calcButton = document.querySelector(".calculate-button");

calcButton.addEventListener('click', calc);