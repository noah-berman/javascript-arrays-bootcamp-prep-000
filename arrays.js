var chocolateBars = new Array ('snickers', 'hundred grand', 'kitkat', 'skittles')

function addElementToBeginningofArray (array, element) {
  return newArray = [${element}, ...${array}]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  return ${array} = [${element}, ...${array}]
}

function addElementToEndofArray (array, element) {
  return newArray = [...${array}, ${element}]
}

function destructivelyAddElementToEndOfArray (array, element) {
  return ${array} = [...${array}, ${element}]
}

function accessElementInArray (array, index) {
  console.log(${array}[${index}])
}

