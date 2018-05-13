var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningofArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return ${array} = [${element}, ...${array}]
}

function addElementToEndofArray (array, element) {
  return newArray2 = [...${array}, ${element}]
}

function destructivelyAddElementToEndOfArray (array, element) {
  return ${array} = [...${array}, ${element}]
}

function accessElementInArray (array, index) {
  console.log(${array}[${index}])
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  ${array}.shift()
 console.log(${array})
}

function removeElementFromBeginningOfArray (array) {
  
}
}