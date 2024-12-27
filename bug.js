function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x < 0) {
    return -1; // Handle negative numbers
  } else {
    return x * 2; // Double positive numbers
  }
}

console.log(foo(null));   // Output: 0
console.log(foo(-5));    // Output: -1
console.log(foo(5));     // Output: 10
console.log(foo(undefined));//Output:NaN instead of returning -1 or 0