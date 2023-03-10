//         // String Methods Problems

// // Problem 1 Write a js program to find the length of a string.

// let chkString = "Welcome to JavaScript";
// console.log(`The Length of ${chkString} is `, chkString.length);

// // Problem 2 Write a js program to concatenate two strings.
// let concatString1 = "Ahmad";
// let concatString2 = "Saboor";
// let concatedString = concatString1.concat(concatString2);
// console.log(concatedString);

// // Problem 3 Write a js program to convert a string to uppercase.
// let rndmCase = "WhAt Are yoU DoInG";
// // Below rndmCase is treated as Object which method is toUpperCase and stored it into variable upperCase
// let upperCase = rndmCase.toUpperCase();
// console.log(upperCase);

// // Problem 4 Write a js program to convert a string to lowercase.
// let lowerCase = rndmCase.toLowerCase();
// console.log(lowerCase);

// // Problem 5 Write a js program to check if a string contains a specific substring.
// let repString = "Ahmad is writting js programmer";
// let chgString = repString.includes(prompt("Enter the string you want to chk:"))
// if (chgString == true) {
//     alert(`Yes It Has`)
// }
// else {
//     alert(`No is not here`)
// }

// // Problem 6 Write a js program to find the index of a specific character in a string.
// let chkIndex = "Ahmad";
// // To Chk the index of String
// for (let i in chkIndex) {
//     // Below will print chkIndex value i then will print the index
//     console.log(`The Value ${chkIndex[i]} index is `,i)
// }

// // Problem 7  Write a js program to replace a specific substring in a string.
// let givString = prompt("Enter String Here");
// let strToRep = prompt(`Enter String You want to replace form ${givString}`);
// let strToWith=prompt(`Enter String you want to replace with`)
// let goingTOrep = givString.replace(strToRep,strToWith);
// alert(goingTOrep);

// // Problem 8 Write a js program to remove leading and trailing whitespace from a string.
// let beforeTrimString = "       Ahmad       "
// let afterTrimString = beforeTrimString.trim();

// console.log(afterTrimString);




// // Problem 9 Write a js program to split a string into an array of substrings.
// let beforeStr = "Ahmad";
// // if we use double quotes between split method it will make each element in a string and put in an array
// let aftStr = beforeStr.split("");
// console.log(aftStr);



// // Problem 10 Write a js program to reverse a string.

// let reverTheString = "What are you doing man";
// let divideBy = reverTheString.split("");
// // Reverse is the method of array so thats why use split to convert that to convert into array
// let reverseArr = divideBy.reverse();
// // "" will remove the commas which was added by split
// console.log(reverseArr.join(""));




// // Numbers Programs Starts Here



// // Problem 11 Write a js program to find the sum of two numbers 
// // below num1 and num2 are parameter when we call function then we give argument
// let twoSum = (num1, num2) => {
//     return num1+num2
    
// }
// console.log(twoSum(2, 4));

// // Problem 12 Write a js program to find the difference between two numbers.

// let twoDiff = (num1, num2) => {
//     return num1-num2
    
// }
// console.log(twoDiff(2, 4));

// // Problem 13 Write a js program to find the product of two numbers.

// let twoMult = (num1, num2) => {
//     return num1*num2
    
// }
// console.log(twoMult(2, 4));

// // Problem 14 Write a js program to find the quotient and remainder of two numbers.

// let modAndRema = (num1, num2) => {
//     let mod = num1 % num2;
//     let rema = num1 / num2;
//     console.log(`The mod/remainder is ${mod} and Quotient is ${rema}`)
// }
// modAndRema(4, 2);

// // Problem 15 Write a js program to round a number to the nearest integer.
// let num1 = Number.parseInt(prompt("Enter number for nearest round"));
// console.log(`The Number before round was ${num1}and now is`,Math.round(num1));

// // Problem 16 Write a js program to generate a random number between 0 and 1.

// let genNum = console.log(Math.random() * 1);

// // Problem 17 Write a js program to find the maximum and minimum of two numbers.
// let chkkNum1 = Number.parseInt(prompt("Enter Number First"));
// let chkkNum2 = Number.parseInt(prompt("Enter Number Second"));
// console.log(`The Maximum Value Between ${chkkNum1} and ${chkkNum2}`,Math.max(chkkNum1, chkkNum2));
// console.log(`The Minimum Value Between ${chkkNum1} and ${chkkNum2}`,Math.min(chkkNum1, chkkNum2));


// // Problem 18 Write a js program to calculate the square root of a number.
// let sqrtNum = Number.parseInt(prompt("Enter Number For SquareRoot"));
// console.log(`The SquareRoot of ${sqrtNum} is`,Math.sqrt(sqrtNum));

// // Problem 19 Write a js program to calculate the absolute value of a number.
// let absVal = Number.parseInt(prompt("Enter Number For Absolute"));
// console.log(`The Absolute Value of ${absVal} is `,Math.abs(absVal));


// // Problem 20 Write a js program to calculate the power of a number.
// let powerOn = Number.parseInt(prompt("Enter Number of which you want power"));
// let powerOf = Number.parseInt(prompt("Enter the power"));
// console.log(`The Power of ${powerOn} and of ${powerOf} `,Math.pow(powerOn,powerOf))


// Date Metods 







