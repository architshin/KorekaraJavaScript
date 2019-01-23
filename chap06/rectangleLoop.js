"use strict";

let width = Math.round(Math.random() * 9) + 1;
let height = Math.round(Math.random() * 9) + 1;
let str = "";
for(let i = 1; i <= height; i++) {
	for(let j = 1; j <= width; j++) {
		str += "*";
	}
	str += "\n";
}
console.log(str);
