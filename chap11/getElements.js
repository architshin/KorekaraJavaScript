"use strict";

//［タグ名で取得］ボタンクリック時の処理。
function onTagButtonClick() {
	//タグ名がbuttonの要素を取得。
	let buttonTags = document.getElementsByTagName("button");
	//結果表示用の文字列変数を用意。
	let result = "";
	//取得した要素集合のループ。
	for(let oneButton of buttonTags) {
		//各要素のテキスト部分を取得して結果表示文字列変数に文字列結合。
		result += oneButton.textContent + ":";
	}
	//結果表示用のp要素を取得。
	let resultP = document.getElementById("result");
	//結果表示用のp要素のテキストに結果を表示。
	resultP.textContent = result;
}

//［クラス名で取得］ボタンクリック時の処理。
function onClassButtonClick() {
	//redTextクラスを含む要素を取得。
	let redElements = document.getElementsByClassName("redText");
	//結果表示用の文字列変数を用意。
	let result = "";
	//取得した要素集合のループ。
	for(let redElement of redElements) {
		//各要素のテキスト部分を取得して結果表示文字列変数に文字列結合。
		result += redElement.textContent + ":";
	}
	//結果表示用のp要素を取得。
	let resultP = document.getElementById("result");
	//結果表示用のp要素のテキストに結果を表示。
	resultP.textContent = result;
}

//［name属性で取得］ボタンクリック時の処理。
function onNameButtonClick() {
	//name属性がskillの要素を取得。
	let checkboxes = document.getElementsByName("skill");
	//結果表示用の文字列変数を用意。
	let result = "チェックされたもの:";
	//取得した要素集合のループ。
	for(let checkbox of checkboxes) {
		//各チェックボックス要素がチェックされていれば…
		if(checkbox.checked) {
			//各要素のvalue部分を取得して結果表示文字列変数に文字列結合。
			result += checkbox.value + ",";
		}
	}
	//結果表示用のp要素を取得。
	let resultP = document.getElementById("result");
	//結果表示用のp要素のテキストに結果を表示。
	resultP.textContent = result;
}
