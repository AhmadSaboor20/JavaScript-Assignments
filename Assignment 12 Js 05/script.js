        // String Methods Problems 

// Problem 1 Write a js program to find the length of a string.

let chkString = "Welcome to JavaScript";
console.log(`The Length of ${chkString} is `, chkString.length);

// Problem 2 Write a js program to concatenate two strings.
let concatString1 = "Ahmad";
let concatString2 = "Saboor";
let concatedString = concatString1.concat(concatString2);
console.log(concatedString);

// Problem 3 Write a js program to convert a string to uppercase.
let rndmCase = "WhAt Are yoU DoInG";
// Below rndmCase is treated as Object which method is toUpperCase and stored it into variable upperCase
let upperCase = rndmCase.toUpperCase();
console.log(upperCase);

// Problem 4 Write a js program to convert a string to lowercase.
let lowerCase = rndmCase.toLowerCase();
console.log(lowerCase);

// Problem 5 Write a js program to check if a string contains a specific substring.
let repString = "Ahmad is writting js programmer";
let chgString = repString.includes(prompt("Enter the string you want to chk:"))
if (chgString == true) {
    alert(`Yes It Has`)
}
else {
    alert(`No is not here`)
}

// Problem 6 Write a js program to find the index of a specific character in a string.
let chkIndex = "Ahmad";
// To Chk the index of String
for (let i in chkIndex) {
    // Below will print chkIndex value i then will print the index
    console.log(`The Value ${chkIndex[i]} index is `,i)
}

// Problem 7  Write a js program to replace a specific substring in a string.
let givString = prompt("Enter String Here");
let strToRep = prompt(`Enter String You want to replace form ${givString}`);
let strToWith=prompt(`Enter String you want to replace with`)
let goingTOrep = givString.replace(strToRep,strToWith);
alert(goingTOrep);

// Problem 8 Write a js program to remove leading and trailing whitespace from a string.
let beforeTrimString = "       Ahmad       "
let afterTrimString = beforeTrimString.trim();

console.log(afterTrimString);




// Problem 9Write a js program to split a string into an array of substrings.



// Problem 10 Write a js program to reverse a string.
strToRep.reve





