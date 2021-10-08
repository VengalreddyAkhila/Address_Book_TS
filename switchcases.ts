import {addDetails,displayDetails} from './persondetails'
declare var require: any;
const path = require('./persondetails');
const readlineSync = require('readline-sync');


function Details() {   
    console.log('1 : Add contact details :');
    console.log('2 : Display contact details :');    
    let choice = readlineSync.questionInt(' Enter your choice : ')
    switch (choice) {
        case 1:
            addDetails();
            break;
        case 2:
            displayDetails();
            break;
      
        default:
            console.log("invalid choice");
 } 
}
Details();