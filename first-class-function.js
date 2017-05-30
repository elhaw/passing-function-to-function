/*
 =======================================================================
 Author      : Abdulrahman Elhaw
 Name        : passing function to function
 Description : passing functions to function in javaScript.
Created on   : June 30, 2017
 ========================================================================
 */
// cubic function declaration
//which will be passed to motherMathFunction
function cube (x) {
  return x * x * x ;
}
//add one to each number in the array
function addOne (x){
  return  x + 1;
}
//divide each number by two
function divideByTwo (x){
  return x/2;
}
//square function declaration


function motherMathFunction (func, numbersList)
{
  // Ebmty array to store result in.
  var result = [];
  //iterate through all numbers
    for (var i = 0 ; i < numbersList.length ; i++)
      {
           //push method used to add every numbr to the result array
           result.push(func(numbersList[i]));
      }
 return result;       
}

//invoking functions        
var cubes = motherMathFunction(cube,[1,2,3,4,5]);
var total = motherMathFunction(addOne,[1,2,3,4,5]);
var division = motherMathFunction(divideByTwo,[1,2,3,4,5]);


//display results
console.log(cubes);
console.log(total);
console.log(division);