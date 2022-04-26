//Union Types
type combinable = number | string;
function combine(input1: combinable, input2: combinable) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number')
        result = input1 + input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}

const combineAges = combine(30,21);
console.log(combineAges)

const combineName = combine(" Prashant " , " Kumar ");
console.log(combineName)

