class Vehicle {
    // This is equalevant to below
    constructor(public color: string){}

    // constructor(color: string) {
    //     this.color = color;
    // } 

    protected honk(): void {
        console.log("beep beep")
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class ACar extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);
    }
    private drive(): void {
        console.log("vroom")
    } // Can't be marked private if method in extended class is already marked public.
    // since method doesn't exist in parent, then we can mark this private.

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const aCar = new ACar(4, 'red');
aCar.startDrivingProcess();
// aCar.honk(); This instance method won't work since its protected in Vehicle.