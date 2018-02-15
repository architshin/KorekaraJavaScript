function onCalcBMIButtonClick() {
	let heightInput = document.getElementById("heightInput");
	let height = heightInput.value;
	let weightInput = document.getElementById("weightInput");
	let weight = weightInput.value;
	
	let bmiObj = new BMI(height, weight);
	let bmi = bmiObj.getBMI();
	let bmiResult = document.getElementById("bmiResult");
	bmiResult.textContent = bmi;
	let advice = bmiObj.getAdvice();
	let adviceMessage = document.getElementById("adviceMessage");
	adviceMessage.textContent = advice;
	let resultMessage = document.getElementById("resultMessage");
	resultMessage.removeAttribute("class");
}

function checkInput(event) {
	let buttonEnabled = true;
	let heightInput = document.getElementById("heightInput");
	let height = heightInput.value;
	let heightInputMsg = document.getElementById("heightInputMsg");
	if(height.length == 0) {
		buttonEnabled = false;
		heightInputMsg.textContent = "身長を入力してください。";
	} else if(!isFinite(height)) {
		buttonEnabled = false;
		heightInputMsg.textContent = "身長には数値を入力してください。";
	} else {
		heightInputMsg.textContent = "";
	}
	let weightInput = document.getElementById("weightInput");
	let weight = weightInput.value;
	let weightInputMsg = document.getElementById("weightInputMsg");
	if(weight.length == 0) {
		buttonEnabled = false;
		weightInputMsg.textContent = "体重を入力してください。";
	} else if(!isFinite(weight)) {
		buttonEnabled = false;
		weightInputMsg.textContent = "体重には数値を入力してください。";
	} else {
		weightInputMsg.textContent = "";
	}
	let calcBMIButton = document.getElementById("calcBMIButton");
	if(buttonEnabled) {
		calcBMIButton.removeAttribute("disabled");
	}
	else {
		calcBMIButton.setAttribute("disabled", "disabled");
	}
}

window.addEventListener("DOMContentLoaded", function() {
	let heightInput = document.getElementById("heightInput");
	heightInput.addEventListener("input", checkInput);
	heightInput.addEventListener("focusout", checkInput);
	let weightInput = document.getElementById("weightInput");
	weightInput.addEventListener("input", checkInput);
	weightInput.addEventListener("focusout", checkInput);
});