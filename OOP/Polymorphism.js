// function fun() {
//     console.log("Hello");
// }
// let ab = "a";
// fun(ab);


// Function Overloading in js 
function sum() {
    if (arguments.length == 0)
        console.log("No args");
    else if (arguments.length == 1)
        console.log("Pass atleast 2 args");
    else {
        let result = 0;
        for (let i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        console.log(result);
    }
}
sum(1, 25);