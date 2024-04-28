let num1 = Number(prompt("Enter first num of array:"));
let num2 = Number(prompt("Enter second num of array:"));
let num3 = Number(prompt("Enter third num of array:"));
let num4 = Number(prompt("Enter fourth num of array:"));
let myArray = [num1,num2,num3,num4];
function maxProduct(num1,num2,num3,num4){
    let result1 = num1 * num2;
    let result2 = num2 * num3;
    let result3 = num3 * num4;
 if(result1 > result2 && result1 > result3){
   message = alert("The result of num1 and num2 is maximum");
 }
 else if(result2 > result1 && result2 > result3){
    message = alert("The result of num2 and num3 is maximum");
 }
 else if(result3 > result1 && result3 > result2){
    message = alert("The result of num3 and num4 is maximum");
 }
}
maxProduct(num1,num2,num3,num4);

let number1 = Number(prompt("Enter first num of array:"));
let number2 = Number(prompt("Enter second num of array:"));
let number3 = Number(prompt("Enter third num of array:"));
let number4 = Number(prompt("Enter fourth num of array:"));
let target = Number(prompt("Enter your target number:"));
function addNum(a,b){
    if(number1 + number2 === target){
        message = alert("The addition of num1 and num2 produce the target..");
    }
    else if(number1 + number3 === target){
        message = alert("The addition of num1 and num3 produce the target..");
    }
    else if(number1 + number4 === target){
        message = alert("The addition of num1 and num4 produce the target..");
    }
   else if(number2 + number3 === target){
        message = alert("The addition of num2 and num3 produce the target..");
    }
    else if(number2 + number4 === target){
        message = alert("The addition of num2 and num4 produce the target..");
    }
   else if(number3 + number4 === target){
        message = alert("The addition of num3 and num4 produce the target..");
    }
    else{
       message = alert("The target can't achieve by the addition of any two numbers");
    }
}
addNum(number1,number2,number3,number4);




let str = prompt ("Enter a string to get its reversed string...");
function reverseStr(str){
let revstr = str.split("").reverse().join("");
message = alert("The reverse of the string is " +revstr)
    
}
reverseStr(str);



let library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hung',
    readingStatus: false
    }];
var i=0;
for(i=0;i<library.length;i++)
{
	if(library[i].readingStatus == true)
	{
        alert("The reading status of index no. " +i);
        alert("The book is read...")
	}
	else
	{
        alert("The reading status of index no. " +i);
        alert("The book is unread...")
	}
}



let amount = Number(prompt("Enter the amount:"));
function amountToCoins(amount, coins) {
    let result = [];
    let remainingAmount = amount;

    coins.sort((a, b) => b - a);

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        while (remainingAmount >= coin) {
            result.push(coin);
            remainingAmount -= coin;
        }
    }

    return result;
}

alert(amountToCoins(amount, [5000, 1000, 500, 100, 75, 50, 20, 10, 5, 2, 1])); 