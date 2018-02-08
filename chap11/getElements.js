function onTagButtonClick() {
	let buttonTags = document.getElementsByTagName("button");
	let result = "";
	for(let oneButton of buttonTags) {
		result += oneButton.textContent + ":";
	}
	let resultP = document.getElementById("result");
	resultP.textContent = result;
}

function onClassButtonClick() {
	let redElements = document.getElementsByClassName("redText");
	let result = "";
	for(let redElement of redElements) {
		result += redElement.textContent + ":";
	}
	let resultP = document.getElementById("result");
	resultP.textContent = result;
}

function onNameButtonClick() {
	let checkboxes = document.getElementsByName("skill");
	let result = "チェックされたもの:";
	for(let checkbox of checkboxes) {
		if(checkbox.checked) {
			result += checkbox.value + ",";
		}
	}
	let resultP = document.getElementById("result");
	resultP.textContent = result;
}
