class Vehicle {
    protected honk(): void {
        console.log("beep beep")
    }
}

class ACar extends Vehicle {
    private drive(): void {
        console.log("vroom")
    } // Can't be marked private if method in extended class is already marked public.
    // since method doesn't exist in parent, then we can mark this private.

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const aCar = new ACar ();
aCar.startDrivingProcess();