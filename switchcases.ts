import { addDetails, displayDetails, searchDetails, deleteDetails } from './persondetails'
declare var require: any;
const path = require('./persondetails');
const readlineSync = require('readline-sync');


function Details() {
    console.log('1 : Add contact details :');
    console.log('2 : Display contact details :');   
    console.log('3 : search contact details :');
    console.log('4 : delete contact details :');
    console.log('5 : update contact details :');
    let choice = readlineSync.questionInt(' Enter your choice : ')
    switch (choice) {
        case 1:
            addDetails();
            break;
        case 2:
            displayDetails();
            break;

        case 3:
            let searchCity: string = readlineSync.question('Enter the city to search ')
            searchDetails(searchCity);
            break;
        case 4:
            let deletecity: string = readlineSync.question('Enter the city to delete the contact ')
            deleteDetails(deletecity);
            
            break;

        default:
            console.log("invalid choice");
    }
}
Details();