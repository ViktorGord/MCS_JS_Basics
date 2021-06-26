let something = parseFloat(window.prompt("Введите любое число"));
if(something>=0) {
	console.log(something);
}else if(something<0) {
	console.log(Math.abs(something));/*я использовал метод Math.abs(), хотя мы его еще не проходили*/
}else {
	window.alert("Пожалуйста, обновите страницу и введите число");
}

