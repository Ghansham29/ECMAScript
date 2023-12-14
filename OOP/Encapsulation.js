class Student{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    add_Address(add){
        this.add = add;
    }

    getDetails(){
        console.log(`Name ${this.name}`);
        console.log(`Address ${this.add}`);
    }
}

let s = new Student("Sham", 12);
console.log(s.getDetails());
console.log(s.add_Address());