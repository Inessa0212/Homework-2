// 1.	Given a number print its digits count. Use both loops (for, while)

// for 

let input = prompt(); // заданное число 
let count = 0; // переменная для хранения цифры
     input = Math.abs(input); // abs- отриц. цифру преврашает в положительную
    if (input === 0) { // условие для 0
        count = 1;
    }
else {
    for (; input > 0; count++)  {  
    input = Math.floor( input / 10); // цикл
}
}
alert(count);

// while

let input = prompt() // исходное число
let count = 0; // хранения цифр
 input = Math.abs(input); // для отрицательного числа 
  
       if (input === 0) { // условие для 0
           count = 1; 
           }
else{
       while (input > 0)  {
         input = Math.floor( input / 10);  // умен. число на 1 разряд
           count++;
       }
}
alert(count);
     


// 2.	Count numbers of digit 9 in a number. Use both loops (for, while)

// for

let input = prompt(); // заданное число
let digit = 9;
let count = 0; // переменная для хранения цифры
   for (; input > 0; input = Math.floor(input / 10)) {
       let numDigit = input % 10; 
     if(numDigit === digit) { // условие для 9
       count++;
   }
   }
alert(count);

// while  

let input = prompt(); // заданное число
let digit = 9; // число 9
let count = 0; // переменная для хранения цифры
   while (input > 0) {
       let numDigit = input % 10;
       if (numDigit === digit) { // условие для 9
            count++;
       }
       input = Math.floor(input / 10);
   } 
alert(count);


// 3.   Given two numbers. Print ony odd numbers between that numbers. 

//for

let startNumber = prompt(); // заданное число
let endNumber = prompt();  // заданное число
    if (startNumber !== 0 && endNumber !== 0) { // условие для обозначения числа 
         for (let result = +startNumber; result <= +endNumber; result++) { // цикл 
        if (result % 2 !== 0) { // проверяется odd числа
                       console.log(result); // результат
        }
    }
 }

//while

let startNumber = prompt(); // заданное число
let endNumber = prompt();  // заданное число
    if (startNumber !== 0 && endNumber !== 0) { // условие для обозначения числа 
        let result = +startNumber 
     while (+result <= +endNumber) {  // цикл
         if (result % 2 !== 0) { // проверается odd числа 
            console.log(result); // результат
             }
              result++;
           } 
        }       

        
// 4.	Given a number as input, insert dashes (-) between each two even numbers. 

// for 

let input = prompt(); // заданное число
let result = ""; // переменная для хранения цифры
let inputString = String(input);

for (; input <= inputString.length; result++) {
         result+= inputString; // превращает "" в число          Не работает, объясните пожалуйста 4-ю задачу.
           }
 if (+inputString % 2 === 0 ) { // условие для even
           
       result+= "-";
   }
alert(result);

//while 



// 5.   Give positive number. Print it in reverse order.

// for

let input = Number(prompt()) // исхлдное число
let start = 0; // переменная для хранения числа
    for (; input > 0; input = Math.floor(input / 10)) {  // цикл 
    let digit = input % 10; // получ. последнюю цифру числа
    start = start * 10 + digit;   // добав. цифру в обратном порядке    
}
alert(start)
     
// while

let input = Number(prompt()) // исходное число
let start = 0; // переменная для хранения числа
   while (input > 0) {  // цикл
        let digit = input % 10; // получ. последнюю цифру числа
        input = Math.floor(input / 10) // умен. число на 1 разряд
    start = (start * 10) + digit;   // добав. цифру в обратном порядке   
}
alert(start);
     
