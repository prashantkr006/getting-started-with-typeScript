//Unknown types
// it comes with some restrictions which makes it better to use over "any" type
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Prashant';
if(typeof userInput === 'string') {
    userName = userInput;
}

//never types
//similar to void type this also return nothing
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occured!', 500)