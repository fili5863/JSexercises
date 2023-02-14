// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const result = greeting("Peter");

// console.log("Result:", result);

// console.log(greeting("Direct Tim"));

// Math.floor(Math.random());

function someFunctionWithOptionalPara(param1, param2, param3) {
  if (param3 === undefined) {
    return `${param1} ${param2}`;
  } else {
    return `${param1} ${param2} ${param3}`;
  }
}

let variable = someFunctionWithOptionalPara("Weird", "Some");

console.log("variable:", variable);
