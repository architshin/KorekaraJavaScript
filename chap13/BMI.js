//BMI計算オブジェクト
class BMI {
	//コンストラクタ。引数は身長と体重。
	constructor(height = 0, weight = 0) {
		this.height = height;
		this.weight = weight;
	}

	//BMIを計算するメソッド。
	getBMI() {
		//BMIを計算。
		let bmi = this.weight / Math.pow(this.height/100, 2);
		//以下３行で小数第2位を四捨五入して小数点以下一桁表示に。
		bmi = bmi * 10;
		bmi = Math.round(bmi);
		bmi = bmi / 10;
		//BMIをリターン。
		return bmi;
	}
	
	getAdvice() {
		let bmi = this.weight / Math.pow(this.height/100, 2);
		bmi = Math.round(bmi);
		let idealWeight = 22 * Math.pow(this.height/100, 2);
		idealWeight = Math.round(idealWeight);
		let adviceMessage = "理想体重です。現状を維持しましょう。";
		if(bmi > 22) {
			adviceMessage = "太っています。体重" + idealWeight + "kgを目指しましょう。";
		} else if(bmi < 22) {
			adviceMessage = "痩せています。体重" + idealWeight + "kgを目指しましょう。";
		}
		return adviceMessage;
	}
}
