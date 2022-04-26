 //function return type ans void
  function add(n1: number, n2:number): number { //return type is number
      return n1 + n2;
  }

  //void type
  function printResult(num: number): void {
      console.log('result: ', num);
      return;
  }

printResult(add(5, 10));

//funtion type

let combineValues: Function; // it defines only that combineValues is a function type
                             // but not the particular function
combineValues = add;
console.log(combineValues(8, 2)) //it will print 10 in console

//explicitly definig which type of function type.
let addValues: (a: number, b: number) => number;

//call back  function
function addAndHnale (n1: number, n2: number, cb: (a: number)=> void) {
    const result = n1 + n2;
    cb(result);
}

addAndHnale(10, 20, (result)=>{
    console.log(result)
});