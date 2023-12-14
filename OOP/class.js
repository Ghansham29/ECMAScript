class Vehicle {
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return (`The name of the bike is ${this.name}`);
    }
}

let bike1 =  new Vehicle("Hayabusa", "Suzuki", "1340cc");

console.log(bike1);
console.log(bike1.getDetails());