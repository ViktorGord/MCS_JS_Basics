const rock = 0;
const scissors = 1;
const paper = 2;


// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Ваш выбор: 0 - камень, 1 - ножницы, 2 - бумага'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
/*let compchoise = document.getElementById("comp1");
let humanchoise = document.getElementById("human");
let result = document.getElementById("gameresult");*/

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if(player == computer) {		
	document.getElementById("comp1").innerHTML = "паритет";
	document.getElementById("human").innerHTML = "паритет";
	document.getElementById("gameresult").innerHTML = "Боевая ничья";
} else if(player == rock && computer == scissors) {		
	document.getElementById("comp1").innerHTML = "Ножницы";
	document.getElementById("human").innerHTML = "Камень";
	document.getElementById("gameresult").innerHTML = "ВЫ выиграли";	
} else if(player == scissors && computer == rock) {		
	document.getElementById("comp1").innerHTML = "Камень";
	document.getElementById("human").innerHTML = "Ножницы";
	document.getElementById("gameresult").innerHTML = "Компьютер выиграл";	
} else if(player == paper && computer == rock) {	
	document.getElementById("comp1").innerHTML = "Камень";
	document.getElementById("human").innerHTML = "Бумага";
	document.getElementById("gameresult").innerHTML = "ВЫ выиграли";	
} else if(player == paper && computer == scissors) {
	document.getElementById("comp1").innerHTML = "Ножницы";
	document.getElementById("human").innerHTML = "Бумага";
	document.getElementById("gameresult").innerHTML = "Компьютер выиграл";	
} else if(player == rock && computer == paper) {
	document.getElementById("comp1").innerHTML = "Бумага";
	document.getElementById("human").innerHTML = "Камень";
	document.getElementById("gameresult").innerHTML = "Компьютер выиграл";	
} else if(player == scissors && computer == paper) {
	document.getElementById("comp1").innerHTML = "Бумага";
	document.getElementById("human").innerHTML = "Ножницы";
	document.getElementById("gameresult").innerHTML = "ВЫ выиграли";	
} else {
	document.write("Чтобы начать играть, введите цифру: 0 - камень, 1 - ножницы, 2 - бумага");
}