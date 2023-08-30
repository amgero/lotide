const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//a function, head, that returns the first element in an array, and undefined if the array is empty
//can verify if what you're looking for is what is found, using the assertEqual function above

const head = function(array) {
    if (array.length > 0) {
        return array[0];
    } else {
        return undefined; //return undefined for empty array
    }
}

//tests

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["me", 8, 10.1]), "me");
assertEqual(head([]), 4);
assertEqual(head([12]), 12);
assertEqual(head([10]), 9);
assertEqual(head([]), "");