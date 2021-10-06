## homework week 2 day 3 JS Array Iterator Methods

### `forEach`

**PURPOSE:** General purpose iterator method.

```js
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend);
});

// logs out "I have a friend named <friend's name>" for each friend
```


**Question 1:**

- Using `forEach` log out each of my `friends` but with their name all lower-cased. Use the `<str>.toLowerCase()` method. 

---

### `map`

**PURPOSE:** Create a new array from a source array, usually "transforming" its values. The returned array is always the same length as the source array.

##### Transform an array

```js
const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
});

// numsTimesTwo --> [1, 4, 6]

/*--- using an arrow function for the callback ---*/
const timesTwo = numbers.map(num => num * 2);
```

**Question 2:**

* Create an array that has the numbers of the array numbers squared

```js
const numbers = [1, 5, 8]

// numbersSquared --> [1, 25, 64]
```

**Bonus Question 2:**

* Use an arrow function inside `map()`

Given an array of instructors,

```js
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
```

**Question 3:**

* Use `map` to create a new array that adds the string " is awesome" to each element in the array.

```js
["Alex is awesome", "Daniel is awesome", "Morgan is awesome", "Ben is awesome", "Micah is awesome", "Jims is awesome"]
```
---

### `reduce`

**PURPOSE:** Reduce an array into a single value.  Note that the "single value" can be a single object, array - anything.

##### Sum up the numbers in an array

```js
const nums = [25, 6, 100, 3];
let sum = nums.reduce(function(acc, num) {
  return acc + num;
}, 0);

// sum equals 134

/*--- using an arrow function for the callback ---*/
let sum = nums.reduce((acc, num) => acc + num);
```

##### Count Even numbers

**Question 4:**

* Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers:
```js
const nums = [25, 6, 8, 3];

// evenNumbers equals 2

```
---

### `filter`

**PURPOSE:** Select certain elements from a source array.

##### Obtain just the odd numbers

```js
const nums = [100, 2, 5, 42, 99];
const odds = nums.filter(function(num) {
  if (num % 2 !== 0)
    return true
  else
    return false
});

console.log(odds);

/*--- using an arrow function for the callback ---*/
const odds = nums.filter(num => num % 2 !== 0);
```

##### YOU DO

**Question 5:**
* Filter out all "jerks"!
* Put them in an array called jerks

```js
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

// jerks equals ["jerks", "jerks"]
```

---

### `find`

**PURPOSE:** Find an element within an array.

##### Find certain car objects

```js
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

let firstWhiteCar = cars.find(function(car) {
  return car.color === 'white';
});
// firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}

let missingCar = cars.find(function(car) {
  return car.color === 'black';
});
// missingCar = undefined

/*--- using an arrow function for the callback ---*/
let firstWhiteCar = cars.find(car => car.color === 'white');
```

##### YOU DO

**Question 6:**

* Find the first car whose year is older than 2014 and assign it to a variable named `notTooOldCar`;

```js
// notTooOldCar = {color: 'red', make: 'BMW', year: 2001}
```
---


#### Extra bonus Questions:

### `findIndex`

**PURPOSE:** Like `find` above, but returns the found element's index. Note that this is usually used to find the index of an object, or one of its built-in variations (Array, Date, Regular Expression, Error) within the array. If trying to find the index of a primitive type, use `indexOf` instead.


##### Find the index of the first match

```js
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

let firstWhiteCarIdx = cars.findIndex(function(car) {           
  return car.color === 'white';
});
// firstWhiteCarIdx equals 1

let missingCarIdx = cars.findIndex(function(car) {
  return car.color === 'black';
});
// missingCarIdx = -1

/*--- using an arrow function for the callback ---*/
let firstWhiteCarIdx = cars.findIndex(car => car.color === 'white');
```
---

##### YOU DO

**Bonus Question 1:**

* Find the index of the first car whose year is older than 2014 and assign it to a variable named `notTooOldCarIndex`;

```js
// notTooOldCarIndex = 0
```
---

### `some`

**PURPOSE:** Check if array has at least one element that meets a certain condition.

Henry would be proud...

```js
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

let hasFord = cars.some(function(car) {
  return car.make === 'Ford';
});
// hasFord is true

/*--- using an arrow function for the callback ---*/
let hasFord = cars.some(car => car.make === 'Ford');
```

##### YOU DO

**Bonus Question 2:**

Do I have an _evil monkey_ in my room? 

```js
const myRoom = ["evil monkey", "bed", "lamp"];
let isEvilMonkeyInRoom = /* Fill code in here */
```

---

### `every`

**PURPOSE:** Check if **every** element in the array meets a certain condition.

##### Are all cars blue?

```js
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

let everyCarIsBlue = cars.every(function(car) {
  return car.color === 'blue';
});

// everyCarIsBlue is false

/*--- using an arrow function for the callback ---*/
let everyCarIsBlue = cars.every(car => car.color === 'blue');
```
**Bonus Question 3:**

* Check if **every** car in the array are older than 2014 and assign it to a variable named `areNotThatOld`;

```js
// areNotThatOld = false
```



## Reference

[Array Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
