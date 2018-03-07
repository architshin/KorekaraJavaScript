"use strict";

//［上の文字を赤に］ボタンクリック時の処理。
function onP2RedButtonClick() {
	//idがshowTextのp要素を取得。
	let showText = document.getElementById("showText");
	//取得したp要素のstyle属性に文字色を赤にするように設定。
	// showText.setAttribute("style", "color: red");
	showText.style = "color: red";
}

//［赤文字を元通りに］ボタンクリック時の処理。
function onP2DefaultButtonClick() {
	//idがshowTextのp要素を取得。
	let showText = document.getElementById("showText");
	//取得したp要素のstyle属性をを削除。
	showText.removeAttribute("style");
}
