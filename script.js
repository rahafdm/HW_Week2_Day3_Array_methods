const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (friend) {
    console.log("I have a friend named " + friend.toLowerCase());
});

//----------------------------//
const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function (num) {
    return num * 2;
});

const timesTwo = numbers.map(num => num * 2);

console.log(timesTwo);

//----------------------------//

const numbers1 = [1, 5, 8]

const squaredNumber = numbers1.map(function (number) {
    return number ** 2
})

console.log(squaredNumber);

//----------------------------//

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

const instructors1 = instructors.map(instructor => instructors);
console.log(instructors1);

//----------------------------//

const instructors2 = instructors.map(instructor1 => instructor1 + " is awesome ");
console.log(instructors2);



