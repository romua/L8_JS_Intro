function task2() {
	var countEur = prompt("How much euros?","0");
	var countUsd = prompt("How much dollars?","0");

	var coefEurToUah  = 29.7455;
	var coefUsdToUah  = 26.0894;
	var coeftEurToUsd = 1.1401;

	let resultTask2 = `${countEur} euros are equal ${countEur*coefEurToUah}UAH, ${countUsd} dollars are equal ${countUsd*coefUsdToUah}UAH, one euro is equal ${coeftEurToUsd} dollars.`;
	
	return alert(resultTask2);
}