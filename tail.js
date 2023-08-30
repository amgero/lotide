const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length <= 1) {
    const empty = console.log([]);
    return empty; //return an empty array for arrays with 0 or 1 element
  } else {
    const result = console.log(array.slice(1));
    return result;//returns new array starting from index 1, shallow copy
  }
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);