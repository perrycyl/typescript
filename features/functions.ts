// Type annotations with functions
// Arguments don't get type inference
// Type Inference is applied to the return

const add = (a: number,b: number): number => {
    return a + b;
};

// sample of why return annotation is valuable.
const subtract = (a: number, b: number): number => {
    a-b;
}

function divide(a: number, b: number): number {
    return a/b;
}

const multiple = function(a:number, b: number): number {
    return a*b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

// ES2015 destructuring
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(forecast)
