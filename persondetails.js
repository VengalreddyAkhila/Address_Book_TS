"use strict";
exports.__esModule = true;
exports.deleteDetails = exports.searchDetails = exports.displayDetails = exports.addDetails = exports.Person = exports.persondetails = exports.readlineSync = void 0;
var readlineSync = require('readline-sync');
exports.readlineSync = readlineSync;
var json;
var Obj;
var persondetails = require("./persondata.json");
exports.persondetails = persondetails;
var fs = require("fs");
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
;
function addDetails() {
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
    console.log(persondetails);
    fs.readFile('persondata.json', 'utf8', function (err, data) {
        persondetails = JSON.parse(data);
        persondetails.push(Obj);
        json = JSON.stringify(persondetails);
        fs.writeFile('persondata.json', JSON.stringify(persondetails), 'utf8', function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }
        });
    });
    console.log(" Contact details added");
}
exports.addDetails = addDetails;
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
function searchDetails(city) {
    console.log("City searched: ", city);
    var contactdata = persondetails;
    var details = contactdata;
    for (var i = 0; i < details.length; i++) {
        if (details[i].city.toLowerCase() == city.toLowerCase()) {
            console.log(details[i]);
        }
    }
}
exports.searchDetails = searchDetails;
function deleteDetails(deletecity) {
    var data = persondetails;
    var details = data;
    var remove = details.findIndex(function (item) { return item.city === deletecity; });
    details.splice(remove, 1);
    fs.writeFileSync('contact.json', JSON.stringify(details));
    console.log("Contact deleted!");
}
exports.deleteDetails = deleteDetails;
displayDetails();
