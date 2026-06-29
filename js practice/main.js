
//====================
// Q1 STRING LENGTH

let fullName1 = "Ali Ahmad";

console.log(fullName1.length);


//====================
// Q2 CONVERT CASE

let text = "JavaScript";

console.log(text.toUpperCase());

console.log(text.toLowerCase());


//====================
// Q3 REMOVE EXTRA SPACES

let name = "     Ali Ahmad     ";

console.log(name);

console.log(name.trim());


//====================
// Q4 EXTRACT A WORD
//====================

let sentence = "I love JavaScript Programming";

let word = sentence.slice(7,17);

console.log(word);


//====================
// Q5 REPLACE A WORD
//====================

let line = "I love JavaScript Programming";

let newLine = line.replace("Programming","Coding");

console.log(newLine);


//====================
// Q6 STUDENT NAMES
//====================

let students1  = ["Ali","Ahmad","Bilal","Danial","Arham"];

console.log(students1[0]);

console.log(students1[students1.length-1]);

console.log(students1.length);


//====================
// Q7 ADD NEW STUDENT
//====================

let fruits = ["Apple","Mango","Banana"];

fruits.push("Orange");

fruits.unshift("Grapes");

console.log(fruits);


//====================
// Q8 REMOVE ITEMS
//====================

let colors = ["Red","Blue","Green","Black","White"];

colors.shift();

colors.pop("pink");

console.log(colors);


//====================
// Q9 COMBINE ARRAYS
//====================

let arr1 = [10,20,30];

let arr2 = [40,50,60];

let arr3 = arr1.concat(arr2);

console.log(arr3);


//====================
// Q10 GREETING FUNCTION
//====================

function greeting(name){

    console.log(`Hello, ${name}! Welcome to JavaScript.`);

}

greeting("Ali");

greeting("Ahmad");






//====================
// Q11 FULL NAME GENERATOR
//====================

function fullName(firstName, lastName){

    return `${firstName} ${lastName}`;

}

console.log(fullName("Ali","Ahmad"));


//====================
// Q12 EVEN OR ODD
//====================

function evenOdd(num){

    if(num % 2 == 0){

        return "Even";

    }else{

        return "Odd";

    }

}

console.log(evenOdd(20));

console.log(evenOdd(15));


//====================
// Q13 LARGEST NUMBER
//====================

function largest(num1, num2){

    if(num1 > num2){

        return num1;

    }else{

        return num2;

    }

}

console.log(largest(20,50));


//====================
// Q14 SHOPPING LIST
//====================

let shopping = ["Rice","Milk","Sugar"];

shopping.push("Tea");

shopping.push("Oil");

shopping.shift();

console.log(shopping);


//====================
// Q15 PASSWORD CHECKER
//====================

function checkPassword(password){

    if(password.length >= 8){

        return "Strong Password";

    }else{

        return "Weak Password";

    }

}

console.log(checkPassword("Ali123"));

console.log(checkPassword("Ali12345"));


//====================
// Q16 COUNT VOWELS
//====================

function countVowels(str){

    let count = 0;

    for(let i = 0; i < str.length; i++){

        if(
            str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
        ){

            count++;

        }

    }

    return count;

}

console.log(countVowels("JavaScript"));


//====================
// Q17 REVERSE STRING
//====================

function reverseString(text){

    let reverse = "";

    for(let i = text.length - 1; i >= 0; i--){

        reverse = reverse + text[i];

    }

    return reverse;

}

console.log(reverseString("Hello"));


//====================
// Q18 SEARCH IN ARRAY
//====================

let students2= ["Ali","Ahmad","Bilal","Danial","Arham"];

let search = prompt("Enter Student2 Name");

if(students2.includes(search)){

    console.log("Student2 Found");

}else{

    console.log("Student2 Not Found");

}


//====================
// Q19 PRODUCT MANAGEMENT
//====================

let products = ["Mobile","Laptop","Mouse"];

products.push("Keyboard");

products.shift();

products.splice(1,1,"Headphones");

console.log(products);


//====================
// Q20 STUDENT REPORT SYSTEM
//====================

function studentReport(name, marks){

    let subjects = ["HTML","CSS","JavaScript"];

    let result;

    if(marks >= 40){

        result = "Pass";

    }else{

        result = "Fail";

    }

    console.log(`Student Name : ${name}`);
    console.log(`Subjects : ${subjects}`);
    console.log(`Marks : ${marks}`);
    console.log(`Result : ${result}`);

}

studentReport("Ali",85);