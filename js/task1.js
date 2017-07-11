function task1() {
	var a = prompt("Enter a:", '');
	var b = prompt("Enter b:", '');
	var c = prompt("Enter c:", '');

	var d = b*b-4*a*c;

	var x1 = (d >= 0) ? ((-1)*b+Math.sqrt(d))/2*a : "D < 0"; 
	var x2 = (d >= 0) ? ((-1)*b-Math.sqrt(d))/2*a : "D < 0"; 
	
	let resultTask1 = `Equation ${a}x^2${b}x${c} has x1 = ${x1} and x2 = ${x2} roots`;

	alert(resultTask1);
}

function task2() {
	var countEur = prompt("How much euros?","0");
	var countUsd = prompt("How much dollars?","0");

	var coefEurToUah  = 29.7455;
	var coefUsdToUah  = 26.0894;
	var coeftEurToUsd = 1.1401;

	let resultTask2 = `${countEur} euros are equal ${countEur*coefEurToUah}UAH, ${countUsd} dollars are equal ${countUsd*coefUsdToUah}UAH, one euro is equal ${coeftEurToUsd}USD.`;
	
	alert(resultTask2);
}