//Object Types
/*
-> object {key: value} Any javaScript object,
more specific types {types of object} are possible
*/

const persons = {
    name: 'Prashant',
    age: 21,
    address: 'Chandigarh',
    role: 4
}

console.log(persons.name)

//Tuples, it is not available in javaScript but in typeScript
/*
-> tuple [1, 2] added by typeScript fixed length array
*/
//syntax

const students: {
    name: string,
    regNo: number,
    age: number,
    programming_languages: String[],
    role: [number, string, boolean] //tuple
} = {
    name: 'Prashant',
    regNo: 11917920,
    age: 21,
    programming_languages: ['Java','Python','javaScript','typeScript'],
    role: [2,'developer', true]
}

//conditional
for(const roles of students.role) {
    console.log(roles)
}

//Enum 
/*
-> enum {NEW, OLD} Added TypeScript Automatically
    enumerated global constant identifires
*/
//syntax
enum Fruit {APPLE, BANANA, PAPAYA}

const fruits = {
    frut: Fruit.BANANA
}

if(fruits.frut == Fruit.APPLE)
    console.log("Apple")

if(fruits.frut == Fruit.BANANA)
    console.log("Banana")

if(fruits.frut == Fruit.PAPAYA)
    console.log("Papaya")

//Any , Ay kind of value, no specific type assignment
/*
-> *, it effects the use of typeScript, try to avoid it as much as possible
*/