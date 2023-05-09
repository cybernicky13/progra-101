export class car {
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 90;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    turnOn() {
        if (this.isRunning) {
            console.log('El carro ya estaba encendidio... se dano el motor')
            return;
        }

        if (this.fuelTank <= 0) {
            console.log('El carro no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log('El Carro esta encendido');
    }

    fillTank(gas: number) {
        if (gas > 100) {
            this.fuelTank = 100;
            console.log('El tanque ya esta lleno')
            return;
        }

        if (gas < 0) {
            console.log('El tanque esta vacio');
            this.fuelTank = 0;
            return;
        } else {
            console.log('El tanque tiene gasolina');
        }

        if (this.fuelTank = 50, gas === 20) {
            this.fuelTank = 70;
            return;
        }

        if (this.fuelTank = 90, gas === 50) {
            this.fuelTank = 100;
            return;
        }

        this.fuelTank = gas;

    }
}

let myAudi = new car('Audi', 'Sport');

console.log(myAudi)
myAudi.fillTank(50);
myAudi.turnOn();
console.log(myAudi)