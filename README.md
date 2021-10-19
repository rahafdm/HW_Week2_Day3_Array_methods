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


## Reference

[Array Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
