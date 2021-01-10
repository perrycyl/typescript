// Using interface
// Idea of reusable code with TS.

interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary():string;
}

interface Reportable {
    summary():string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`
    }
};

const newCivic ={
    name: 'civic',
    year: 2002
}

const tesla = {
    name: 'cyber truck',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const newDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printVehicle = (vehicle: Vehicle) : void => {
    console.log(vehicle.summary())

};
const newPrintVehicle = (vehicle: Reportable) : void => {
    console.log(vehicle.summary())
}

// since printVehicle no longer really has much to do with vehicle, we should 
// refactor code to reduce the name of the more fundamental forms.
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};


printVehicle(oldCivic);
printVehicle(newCivic); // Missing a broken and summary() property, shows highlighted error.
newPrintVehicle(tesla); // condensed Interface since printVehicle(oldCivic) isn't really necessary
printSummary(tesla); // function has been refactored from printVehicle to printSummary
printSummary(newDrink);