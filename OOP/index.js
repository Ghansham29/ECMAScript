// We use class keyword to create an Object in js
// We can use any function as constructor in js
 
let person = {
    first_name : "Sham",
    last_name : "Sutar",

    getFunction: function () {
        return(`The name of the person is ${this.first_name} and last name is ${this.last_name}`);
    },

    phone_number : {
        mobile : '123456',
        landline: '369'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);