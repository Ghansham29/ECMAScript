function person1(fname, lname){
    let first_name = fname;
    let last_name = lname;

    let getDetails_noaccess = function () {
        return (`First Name ${first_name} last name ${last_name}`);
    }
    
    this.getDetails_access = function () {
        return (`First Name ${first_name} last name ${last_name}`);
        
    }
}

let person2 = new person1("Sham", "Sutar");
console.log(person2.first_name);
console.log(person2.getDetails_access());
console.log(person2.getDetails_noaccess());