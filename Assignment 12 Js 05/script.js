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


// // Date Metods

// // Problem 21 Write a js program to get the current date and time.
// // to get the date we have to create Object of Date method
// let crDate = new Date();
// alert(crDate);

// // Problem 22 Write a js program to get the current year.

// console.log(crDate.getUTCFullYear());

// // Problem 23 Write a js program to get the current month.
// //  Current Month is 2 as january is 0
// console.log(crDate.getMonth());

// // Problem 24 Write a js program to get the current day of the week.
// // days start from 1 and ends at 7

// console.log(crDate.getDay());

// Problem 25 Write a js program to add a specific number of days to a date.
// let yourCurrentDate = Number.parseInt(prompt("Enter Current Day:"));
// let howMuchAdd = Number.parseInt(prompt(`Your Current Days is ${yourCurrentDate} How much do you want to add`));
// let yourDateAfterAdd = yourCurrentDate + howMuchAdd;
// //created addDay an object with new and date method .
// const addDay = new Date(2023, 2, yourDateAfterAdd, 21, 34, 12);
// alert(addDay);

// // Problem 26 Write a js program to subtract a specific number of days from a date.

// let yourCurrDate = Number.parseInt(prompt("Enter Current Day:"));
// let howMuchSub = Number.parseInt(prompt(`Your Current Days is ${yourCurrDate} How much do you want to Subtraction`));
// let yourDateAfterSub = yourCurrDate - howMuchSub;
// const subDay = new Date(2023, 2, yourDateAfterSub, 21, 34, 12);
// alert(subDay);

// // Problem 27 Write a js program to get the time in milliseconds.

// console.log(crDate.getMilliseconds());

// // Problem 28 Write a js program to get the hours, minutes, and seconds from a date object

// console.log(crDate.toTimeString());


// // Problem 29 Write a js program to create a new date object with a specific year, month, and day.
// let spcYear=prompt("Enter Specific Year Format eg 2022")
// let SpcMonth=prompt("Enter Specific Month Format 0-11")
// let SpcDate=prompt("Enter Specific date Format 0-31")
// let specificDate = new Date(spcYear, SpcMonth, SpcDate,12,3,4)
// alert(specificDate);

// // Problem 30 Write a js program to compare two dates.
// if (specificDate < crDate) {
//     alert("Your Enter Date is smaller");
// }
// else {
//     alert("Your Enter Date Is Greater");
// }


// // Math Methods
// // Problem 31 Write a js program to find the absolute value of a number.
// let negNum = Number.parseInt(prompt("Enter Negative Number"));
// let posNum=Math.abs(negNum)
// console.log(`The Negative Number is ${negNum} and the absolute value is ${posNum}`);

// // Problem 32 Write a js program to find the highest value in a list of numbers.
// let maxNuumb = Math.max(32, 213, 43324, 123, 4321, 2321, 324, 213);
// console.log("The Maximum Number is",maxNuumb);

// //  Problem 33 Write a js program to find the lowest value in a list of numbers.
// let minNuumb= Math.min(32, 213, 43324, 123, 4321, 2321, 324, 213)
// console.log("The Lowest Number is",minNuumb);

// // // Problem 34 Write a js program to round a number up to the nearest integer.
// let takNumb1 = Number.parseFloat(prompt("Enter the Number for round up"));
// let roundNumb1 = Math.ceil(takNumb1);
// console.log(`The Number Before Round up Was ${takNumb1} and now is ${roundNumb1}`);

// // Problem 35 Write a js program to round a number down to the nearest integer.
// let takNumb2 = Number.parseFloat(prompt("Enter the Number for round down"));
// let roundNumb2 = Math.floor(takNumb2);
// console.log(`The Number Before Round down Was ${takNumb2} and now is ${roundNumb2}`);

// // Problem 36 Write a js program to calculate the exponential value of a number.
// let whosePow = Number.parseInt(prompt("Enter the Number whose power"));
// let whatPow = Number.parseInt(prompt("Enter the Number whose power"));
// let takePow = Math.pow(whosePow, whatPow);
// console.log(`The Number is ${whosePow} and power is ${whatPow}`,takePow);

// // Problem 37 Write a js program to calculate the natural logarithm of a number.
// let takeNatLg = Number.parseInt(prompt("Enter the Number for log"));
// let logIs=Math.log(takeNatLg)
// console.log(`The Number for Log was ${takeNatLg} and the log is ${logIs}`);


// // Problem 38 Write a js program to calculate the sine of an angle in radians.
// let takeSin= Number.parseInt(prompt("Enter the Number for Sin"));
// let sinIs = Math.sin(takeSin);
// console.log(`The sine was of ${takeSin} and is ${sinIs}`);

// // Problem 39 Write a js program to calculate the cosine of an angle in radians.

// let takeCos= Number.parseInt(prompt("Enter the Number for Cos"));
// let cosIs = Math.cos(takeCos);
// console.log(`The sine was of ${takeCos} and is ${cosIs}`);

// // Problem 40 Write a js program to calculate the square root of a number.

// let askForSqrt = Number.parseInt(prompt("Enter Number For SquareRoot"));
// let sqrtIs = Math.sqrt(askForSqrt);
// console.log(`The SquareRoot of ${askForSqrt} is ${sqrtIs}`);




// For loop



// Problem 41 Write a program that uses a for loop to print the numbers from 1 to 10.
for (let i = 1; i <= 10; i++){
    console.log("The Value of i is", i);
}

//  Problem 42 Write a program that uses a for loop to print the elements of an array.

const arrOfEven = [2, 4, 6, 8, 10];
for (let i in arrOfEven) {
    console.log(`The Value is ${arrOfEven[i]} and the index is ${i}`);
}

//  Problem 43 Write a program that uses a for loop to calculate the factorial of a number.



