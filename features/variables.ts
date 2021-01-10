
// Type Annotations START
// All below are Type Annotations. Type Inference would have captured these
// Type Annotations if we didn't write the annotations


// type annotation vs type inference. Example 1.
let apples: number = 5; // type annotation to apples of only a number

apples = "asfasdf" // value error highlighted

// type inference
let pears = 3;
pears = "LALLAA"

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothin: undefined =  undefined;

// built in objects
let now: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 123123] // highlighted error of number
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false]

// classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20,
    A: 3123 // annotation is missing, error highlighted
};

// Function
// (i: number) => void is the function's type annotation
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
} 

// Type Annotations END

// When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x:10, y:20};
coordinates.x = "adsfadf" // error highlighted
coordinates.y = 5

// 2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue']
let foundWord: boolean; // better would be let foundWord = false to use Type Inference.

for (let i=0; i<words.length; i++){
    if (words[i] === 'green'){
        foundWord = true;
    } 
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i=0; i<myNumbers.length; i++){
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
