function onH1ButtonClick() {
	let headTitle = document.getElementById("headTitle");
	console.log(headTitle);
}

function onH1TextButtonClick() {
	let headTitle = document.getElementById("headTitle");
	let headTitleText = headTitle.textContent;
	console.log(headTitleText);
}

function onH1TextAltButtonClick() {
	let headTitle = document.getElementById("headTitle");
	headTitle.textContent = "idによる取得サンプル";
}

function onFreewordButtonClick() {
	let freewordInput = document.getElementById("freewordInput");
	let freewordInputValue = freewordInput.value;
	let freewordInputName = freewordInput.getAttribute("name");
	let showInput = document.getElementById("showInput");
	showInput.textContent = "name属性が" + freewordInputName + "の入力された値: " + freewordInputValue;
}

function onP2RedButtonClick() {
	let showInput = document.getElementById("showInput");
	showInput.setAttribute("class", "redText");
}

function onP2DefaultButtonClick() {
	let showInput = document.getElementById("showInput");
	showInput.className = "";
}
