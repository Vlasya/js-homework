// 1  

var num = 10;
var numF = '10';
console.log ( num + numF );
console.log ( num - numF );
console.log ( num / numF );
console.log ( num * numF );
console.log ( num > numF );
console.log ( num < numF );
console.log ( num >= numF );
console.log ( num <= numF );
console.log ( num == numF );
console.log ( num != numF );
console.log ( num !== numF );
console.log ( num === numF );


// Написать конвертер простой калькулятор


var numberOne = prompt("Введите первое число");
var op =prompt("Что с ним делаем? + - / * ");
var numberTwo =prompt("Введите второе число");

if (op== '+') {
	alert ("Сумма чисел = "+( +numberOne+ +numberTwo ));
}
else if (op== '-') {
	alert ("Разница чисел = "+(numberOne - numberTwo));
}
else if (op== '/') {
	alert ("Частное = "+(numberOne / numberTwo));
}
else if (op== '*') {
	alert ("Произведение = "+(numberOne * numberTwo));
}

else{
	alert( "Читать умеешь?");
}

// РАСКОММЕНТИРОВАТЬ, А ВЕРХНИЙ ЗАКОММЕНТИРОВАТЬ))
// Написать конвертер валют. Позволяющий выбрать из доллара (USD), евро (EUR), гривны (UAH) и конвертировать соответственно в доллар, евро или гривну. (курс задаем в переменных)


// var USD="USD";
// var EUR="EUR";
// var UAH="UAH";

// const USD_EUR=0.88;
// const USD_UAH=27.09;
// const EUR_USD=1.13;
// const EUR_UAH=30.69;
// const UAH_USD=0.04;
// const UAH_EUR=0.03;

// var firstCurrency= prompt("Какую валюту хотите конвертировать ? USD /EUR /UAH");
// var secondCurrency= prompt("В какую валюту хотите конвертировать ? USD /EUR /UAH");
// var count= +prompt("Сколько хотите потратить?");

// if(firstCurrency==USD){
// 	if(secondCurrency==EUR){
// 		alert(" Получите  "+count*USD_EUR + " EUR");
// 	}
// 	else if(secondCurrency==UAH){
// 		alert(" Получите  "+count*USD_UAH + " UAH");
// 	}
// }

// else if(firstCurrency==EUR){
// 	if(secondCurrency==USD){
// 		alert(" Получите  "+count*EUR_USD + " USD");
// 	}
// 	else if(secondCurrency==UAH){
// 		alert(" Получите  "+count*EUR_UAH + " UAH");
// 	}
// }

// else if(firstCurrency==UAH){
// 	if(secondCurrency==USD){
// 		alert(" Получите  "+count*UAH_USD + " USD");
// 	}
// 	else if(secondCurrency==EUR){
// 		alert(" Получите  "+count*UAH_EUR + " EUR");
// 	}
// }
