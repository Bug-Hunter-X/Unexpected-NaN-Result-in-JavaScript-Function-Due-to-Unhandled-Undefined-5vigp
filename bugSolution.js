function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  } else if (x < 0) {
    return -1; // Handle negative numbers
  } else {
    return x * 2; // Double positive numbers
  }
}

console.log(foo(null));   // Output: 0
console.log(foo(-5));    // Output: -1
console.log(foo(5));     // Output: 10
console.log(foo(undefined));// Output: 0