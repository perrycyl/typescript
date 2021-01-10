const carMakers = ['ford', 'toyota', 'tesla']; // Type inferred.
const otherMakers: string[] = []; // need to annotate. 
const dates = [new Date(), new Date()];

const carsByMake=[
    ['f150'],
    ['carolla'],
    ['camaro']
]; // see annotation of string[][]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string)=>{
    return car.toUpperCase();
})

//Flexible Types
const importantDates:(Date | string)[] = [new Date()];

importantDates.push('2030-10-10')
importantDates.push(100) //error highlighted





