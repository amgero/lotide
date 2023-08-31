const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
    
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
    
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`👎👎👎 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const without = function(source, itemsToRemove) {
  const filteredArray = []; // creates an empty array to copy the final elements into after being filtered
    
  for (const item of source) { // for each item in the array
    let found = false; // initialize the function as not found
    for (const removeItem of itemsToRemove) {
      if (item === removeItem) { // if item in the array matches the item to remove, mark found, end iteration
        found = true;
        break;
      }
    }
    if (!found) {
      filteredArray[filteredArray.length] = item;
    } // if an item to remove is not found in the array, it is added to the array
  }
    
  return filteredArray; // returns the array
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);