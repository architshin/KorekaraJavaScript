//［h1要素の取得］ボタンクリック時の処理。
function onH1ButtonClick() {
	//idがheadTitleの要素を取得。
	let headTitle = document.getElementById("headTitle");
	//取得した要素をコンソール表示。
	console.log(headTitle);
}

//［h1のテキスト取得］ボタンクリック時の処理。
function onH1TextButtonClick() {
	//idがheadTitleの要素を取得。
	let headTitle = document.getElementById("headTitle");
	//取得した要素のテキスト部分を取得。
	let headTitleText = headTitle.textContent;
	//取得したテキスト部分をコンソール表示。
	console.log(headTitleText);
}

//［h1のテキスト書換］ボタンクリック時の処理。
function onH1TextAltButtonClick() {
	//idがheadTitleの要素を取得。
	let headTitle = document.getElementById("headTitle");
	//取得した要素のテキスト部分を変更。
	headTitle.textContent = "idによる取得サンプル";
}

//［入力値の表示］ボタンクリック時の処理。
function onFreewordButtonClick() {
	//idがfreewordInputのinput要素を取得。
	let freewordInput = document.getElementById("freewordInput");
	//取得したinput要素の入力値を取得。
	let freewordInputValue = freewordInput.value;
	//取得したinput要素のname属性値を取得。
	let freewordInputName = freewordInput.getAttribute("name");
	//idがshowInputのp要素を取得。
	let showInput = document.getElementById("showInput");
	//取得したp要素のテキストにinput要素の入力値とname属性を表示。
	showInput.textContent = "name属性が" + freewordInputName + "の入力された値: " + freewordInputValue;
}

//［上の文字を赤に］ボタンクリック時の処理。
function onP2RedButtonClick() {
	//idがshowInputのp要素を取得。
	let showInput = document.getElementById("showInput");
	//取得したp要素のclass属性にredTextクラスを設定。
	showInput.setAttribute("class", "redText");
}

//［赤文字を元通りに］ボタンクリック時の処理。
function onP2DefaultButtonClick() {
	//idがshowInputのp要素を取得。
	let showInput = document.getElementById("showInput");
	//取得したp要素のclass属性を空文字に設定。
	showInput.className = "";
}
