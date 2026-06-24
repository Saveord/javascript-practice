"use strict";

// create empty object
let user = {};

// add properties
user.name = "John";
user.surname = "Smith";

alert(user.name);

// change name value
user.name = "Pete";
alert(user.name);

// shows that username is undefined
// after deletion
delete user.name;
alert(user.name);

// create object isEmpty function
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

alert(isEmpty(user));

// sum up all object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

/* 
 create a function that
 multiplies an object's numeric 
 properties by 2
*/
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) { // key is property name

        // need to find the type of value the 
        // property holds ie. "obj[key]"
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

for (let key in menu) {
    alert(menu[key]);
}

