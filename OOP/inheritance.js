class Parent{
    constructor(name){
        this.name = name;
    }
    toString(){
        return(`Name ${this.name}`);
    }

}
class Child extends Parent {
    constructor(name, id){
        super(name);
        this.id = id;
    }

    toString(){
        return (`${super.toString()}`);
        Student ID : this.id
    }
}