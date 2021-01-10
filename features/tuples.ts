const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

// set array as a tuple
const pepsi: Drink = ['brown', true, 40]
pepsi[0] = 40; // error noted in the tuple

const sprite: Drink = ['clear', true, 30]


// Why we rarely use tuples?
// At a glance, it does not help with determining what the values are representing.
const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
}