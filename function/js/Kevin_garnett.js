
function haveEnough() {
	let totalCash = parseFloat(window.prompt("Сколько у Вас наличных?"));	
	let wathesCount = parseFloat(window.prompt("Сколько часов Вы хотите купить?"));
	let earringsCount = parseFloat(window.prompt("Сколько сережек Вы хотите купить?"));
	let wathesPrice = parseFloat(window.prompt("А сколько сейчас стоят одни часы?"));
	let earringsPrice = parseFloat(window.prompt("А одни сережки сколько стоят?"));	
	let wathesSum = wathesCount*wathesPrice;
	let earringsSum = earringsCount*earringsPrice;
	let totalSum = wathesSum + earringsSum;	
	let goodresult = "Enough $$$";
	let badresult = "Not enough $$$";
			(totalCash >= totalSum) ? alert(goodresult) : alert(badresult);		
	}
	haveEnough();

function reload() {
	window.location.reload();
}
reload();
