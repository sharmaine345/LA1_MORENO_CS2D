// 1. Create variable name (firstFavNumb) & store your favorite number.
let firstFavNumb = 5;

// 2. Create variable name (secondFavNumb) & store second fav Number.
let secondFavNumb = 14;

// 3. Check (firstFavNumb is greater than secondFavNumb)
let isGreaterThan = firstFavNumb > secondFavNumb;
console.log("firstFavNumb > secondFavNumb:", isGreaterThan); // true

// 4. Check (firstFavNumb is less than secondFavNumb)
let isLessThan = firstFavNumb < secondFavNumb;
console.log("firstFavNumb < secondFavNumb:", isLessThan); // false

// 5. Check (firstFavNumb is greater than or equal to secondFavNumb)
let isGreaterThanOrEqual = firstFavNumb >= secondFavNumb;
console.log("firstFavNumb >= secondFavNumb:", isGreaterThanOrEqual); // true

// 6. Check (firstFavNumb is less than or equal to secondFavNumb)
let isLessThanOrEqual = firstFavNumb <= secondFavNumb;
console.log("firstFavNumb <= secondFavNumb:", isLessThanOrEqual); // false

// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
let isStrictEqual = firstFavNumb === secondFavNumb;
console.log("firstFavNumb === secondFavNumb:", isStrictEqual); // false

// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
let isLooseEqual = firstFavNumb == secondFavNumb;
console.log("firstFavNumb == secondFavNumb:", isLooseEqual); // false

// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
let isStrictNotEqual = firstFavNumb !== secondFavNumb;
console.log("firstFavNumb !== secondFavNumb:", isStrictNotEqual); // true

// 10. Check (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.
let isLooseNotEqual = firstFavNumb != secondFavNumb;
console.log("firstFavNumb != secondFavNumb:", isLooseNotEqual); // true

// 11. Log all variables
console.log({ firstFavNumb, secondFavNumb, isGreaterThan, isLessThan, isGreaterThanOrEqual, isLessThanOrEqual, isStrictEqual, isLooseEqual, isStrictNotEqual, isLooseNotEqual });
  
