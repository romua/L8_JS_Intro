function task1() {
	var a = prompt("Enter a:", '');
	var b = prompt("Enter b:", '');
	var c = prompt("Enter c:", '');

	var d = b*b-4*a*c;

	var x1 = (d >= 0) ? ((-1)*b+Math.sqrt(d))/2*a : "D < 0"; 
	var x2 = (d > 0) ? ((-1)*b-Math.sqrt(d))/2*a : "D < 0"; 
	
	let resultTask1 = `x1 = ${x1} and x2 = ${x2}`;

	return alert(resultTask1);
}