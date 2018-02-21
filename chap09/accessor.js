"use strict";

class AccessorProp {
	//コンストラクタ。氏名を受け取りプロパティに格納。
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
	}

	//プロパティの氏名を引数の文字列で結合した文字列を生成するメソッド。
	getConcatName(space = " ") {
		return this.lastName + space + this.firstName;
	}
	
	//nameプロパティのゲッタ。
	get name() {
		return this.lastName + this.firstName;
	}

	//extNameプロパティのセッタ。
	set extName(value) {
		this.lastName = value;
		this.firstName = value;
	}
}

//「中田太郎」という氏名でAccessorPropオブジェクトを生成。
let taro = new AccessorProp("中田", "太郎");
//メソッドgetConcatName()で氏名結合文字列を取得し、表示。引数は初期値を使用。
let getConcatNameAns = taro.getConcatName();
console.log("getConcatName:" + getConcatNameAns);
//concatNameプロパティを表示。
console.log("concatName:" + taro.concatName);
//nameプロパティを表示。
console.log("name: " + taro.name);

//nameプロパティに「山口次郎」を代入したうえで同プロパティを表示。
taro.name = "山口次郎";
console.log("name: " + taro.name);

//extNameプロパティに「山口次郎」を代入したうえでextNameプロパティを表示。
taro.extName = "山口次郎";
console.log("extName: " + taro.extName);
//さらにnameプロパティを表示。
console.log("name: " + taro.name);
