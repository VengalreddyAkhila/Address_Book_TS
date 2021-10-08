"use strict";
exports.__esModule = true;
exports.displayDetails = exports.adddetails = exports.Person = exports.persondetails = exports.readlineSync = void 0;
var readlineSync = require('readline-sync');
exports.readlineSync = readlineSync;
var json;
var Obj;
var persondetails = require("./data.json");
exports.persondetails = persondetails;
var fs = require("fs");
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
// let getdata = new  Person("anu","ram","anu@gmail.com",9786545634,"gadwal","telangana",509345);
// console.log(getdata)
function adddetails() {
    var persondata = new Person();
    persondata.firstName = readlineSync.question('enter firstname : ');
    persondata.lastName = readlineSync.question('enter lastname : ');
    persondata.emailId = readlineSync.question('enter mailid : ');
    persondata.phoneNumber = readlineSync.questionInt('enter phonenumber : ');
    persondata.city = readlineSync.question('enter city : ');
    persondata.state = readlineSync.question('enter state : ');
    persondata.zipCode = readlineSync.questionInt('enter zipcode :');
    Obj = {
        "firstName": persondata.firstName,
        "lastName": persondata.lastName,
        "emailId": persondata.emailId,
        "phoneNumebr": persondata.phoneNumber,
        "city": persondata.city,
        "state": persondata.state,
        "zipCode": persondata.zipCode
    };
    var persondetails = [];
    persondetails.push(Obj);
    fs.readFile('persondata.json', 'utf8', function (err, data) {
        persondetails = JSON.parse(data);
        persondetails.push(Obj);
        // json = JSON.stringify(persondetails);
        fs.writeFile('persondata.json', json = JSON.stringify(persondetails), 'utf8', function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }
        });
    });
    console.log("person Contact details added");
}
exports.adddetails = adddetails;
function displayDetails() {
    fs.readFile('./persondata.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
}
exports.displayDetails = displayDetails;
