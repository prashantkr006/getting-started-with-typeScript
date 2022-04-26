console.log("your code goes here!")

//Core Types
/*
-> number {1, 5.3, -10} all numbers no difference between integers or floats
-> string {'Hi', "Hi", `Hi`} all text values
-> boolean {true, false} just these two, no "truthy" or "falsy" values
*/ 
function add(n1: number, n2: number, phraseResult: string, showResult: boolean) {
    const result = n1 + n2;
    if(showResult)
        console.log(phraseResult + result)
    else result;
}

let number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "sum is: ";

add(number1, number2, resultPhrase, printResult)

const ar = [1,2,3,4,5,6];

function displayArr(ar: Array<number>) {
    for(let i = 0; i < ar.length; i++) {
        console.log(ar[i])
    }
}

displayArr(ar);