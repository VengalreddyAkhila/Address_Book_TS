"use strict";
exports.__esModule = true;
var persondetails_1 = require("./persondetails");
var path = require('./persondetails');
var readlineSync = require('readline-sync');
function Details() {
    console.log('1 : Add contact details :');
    console.log('2 : Display contact details :');
    console.log('3 : search contact details :');
    console.log('4 : delete contact details :');
    console.log('5 : update contact details :');
    var choice = readlineSync.questionInt(' Enter your choice : ');
    switch (choice) {
        case 1:
            (0, persondetails_1.addDetails)();
            break;
        case 2:
            (0, persondetails_1.displayDetails)();
            break;
        case 3:
            var searchCity = readlineSync.question('Enter the city to search ');
            (0, persondetails_1.searchDetails)(searchCity);
            break;
        case 4:
            var deletecity = readlineSync.question('Enter the city to delete the contact ');
            (0, persondetails_1.deleteDetails)(deletecity);
            break;
        default:
            console.log("invalid choice");
    }
}
Details();
