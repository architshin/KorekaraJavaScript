"use strict";

//2011年10月5日のDateオブジェクトを生成。
let jobs = new Date(2011, 10, 5);
//jobsを文字列に整形して表示。
console.log("ジョブズの命日: " + jobs.toDateString());
//jobsを現在のロケールにあった文字列に整形して表示。
console.log("ジョブズの命日: " + jobs.toLocaleDateString());
//jobsのUNIXエポックからのミリ秒を取得。
let jobsMills = jobs.getTime();

//jobsの月だけ取得。
let month = jobs.getMonth();
//jobsの月を1ヶ月進める。
jobs.setMonth(month + 1);
console.log("1ヶ月後: " + jobs.toLocaleDateString());

//jobsの日だけ取得。
let date = jobs.getDate();
//jobsの日を6日戻す。
jobs.setDate(date - 6);
console.log("6日前: " + jobs.toLocaleDateString());

//現在の日時を取得し、表示。
let now = new Date();
console.log("現在の日時: " + now.toLocaleString());
//nowのUNIXエポックからのミリ秒を取得。
let nowMills = now.getTime();
//jobsとnowのミリ秒の差分を計算。
let diffMills = nowMills - jobsMills;
//差分のミリ秒を日に換算し、表示。
let diffDate = diffMills / (1000 * 60 * 60 * 24);
console.log("ジョブズの命日からの経過日: " + Math.floor(diffDate) + "日");
