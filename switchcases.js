"use strict";
exports.__esModule = true;
var persondetails_1 = require("./persondetails");
var path = require('./persondetails');
var readlineSync = require('readline-sync');
function Details() {
    console.log('1 : Add contact details :');
    console.log('2 : Display contact details :');
    var choice = readlineSync.questionInt(' Enter your choice ');
    switch (choice) {
        case 1:
            (0, persondetails_1.adddetails)();
            break;
        case 2:
            (0, persondetails_1.displayDetails)();
            break;
        default:
            console.log("invalid choice");
    }
}
Details();
