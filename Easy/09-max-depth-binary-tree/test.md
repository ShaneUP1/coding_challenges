CC02: `.filter() and .sort()`
===

## TDD Challenges

Use the built-in jest testing in CRA to TDD the following functions. Create one set of files: one called `array-filter.js` and one file called `array-filter.test.js`. Create a second set of files: `array-sort.js` and `array-sort.test.js`.

View the [Jest Docs for `expect` style of assertion](https://jestjs.io/docs/using-matchers)


Basic test file looks like:

```js
import { fiveAndGreaterOnly } from './array-filter';

test('Five and greater only', () => {
    const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

```
Use `npm test` to start your test runner locally.

### `Filter Exercises`

### Five and Greater

Please use the above example code for your first exercise.

### Evens Only

Given an array of numbers, return a new array that only includes the even numbers.

```js
export function evensOnly(arr) {
    
}
```

In | Out
---|---
`[3, 6, 8, 2]` | `[6, 8, 2]`

### Five Characters or Fewer

 Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

```js
export function fiveCharactersOrFewerOnly(arr){
  
}
```

In | Out
---|---
`["dog", "wolf", "by", "family", "eaten", "camping"]` | `["by", "dog", "wolf", "eaten"]`

### People in the Illuminati

Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

```js
export function peopleWhoBelongToTheIlluminati(arr){
  
}
```
#### In:

```js
[
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
```

#### Out:

```js
[ 
    { name: 'Angelina Jolie', member: true }, 
    { name: 'Paris Hilton', member: true }, 
    { name: 'Bob Ziroll', member: true } 
]
```

### Of Age

Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

```js
export function ofAge(arr){
  
}
```

#### In:

```js
[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
```

#### Out:

```js
[ 
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 } 
]
```

### `Sort Exercises`

### Least to Greatest

Sort an array from smallest number to largest

```js
export function leastToGreatest(arr){
  
}
```

In | Out
---|---
`[1, 3, 5, 2, 90, 20]` | `[1, 2, 3, 5, 20, 90] `

### Greatest to Least

Sort an array from largest number to smallest

```js
export function greatestToLeast(arr){
  
}
```

In | Out
---|---
`[1, 3, 5, 2, 90, 20]` | `[90, 20, 5, 3, 2, 1] `

### Shortest to Longest

Sort an array from shortest string to longest

```js
export function lengthSort(arr){
  
}
```

In | Out
---|---
`["dog", "wolf", "by", "family", "eaten"]` | `["by", "dog", "wolf", "eaten", "family"]`

### Alphabetical

Sort an array alphabetically

```js
export function alphabetical(arr){
  
}
```

In | Out
---|---
`["dog", "wolf", "by", "family", "eaten"]` | `["by", "dog", "eaten", "family", "wolf"]`

### By Age

Sort the objects in the array by age

```js
export function byAge(arr){
  
}
```
#### In:

```js
[
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
```

#### Out:

```js
[ 
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Unlucky Swami', age: 77 },
    { name: 'Arrogant Ambassador', age: 100 } 
]
```
