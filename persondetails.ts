
export { readlineSync, persondetails, Person, addDetails, displayDetails,searchDetails,deleteDetails}
const readlineSync = require('readline-sync');
declare var require: any;
var json : any;
var Obj : any;
const persondetails: any = require("./persondata.json");
const fs = require("fs");
class Person {
    firstName : string;
    lastName : string;
    emailId : string;
    phoneNumber : number;
    city :string;
    state : string;
    zipCode : number;   
  
    // constructor(firstName:string, lastName:string, emailId:string, phoneNumber:number, city:string, state:string, zipCode:number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.emailId = emailId;
    //     this.phoneNumber = phoneNumber;
    //     this.city = city;
    //     this.state = state;
    //     this.zipCode = zipCode;
    // }
}
interface contactdetails{
    firstName : string;
    lastName : string;
    emailId : string;
    phoneNumber : number;
    city :string;
    state : string;
    zipCode : number;   
};

function addDetails() : any {
var persondata = new Person();
  persondata.firstName = readlineSync.question('enter firstname : ');
  persondata.lastName = readlineSync.question('enter lastname : ');
  persondata.emailId = readlineSync.question('enter mailid : ');
  persondata.phoneNumber = readlineSync.questionInt('enter phonenumber : ');
  persondata.city = readlineSync.question('enter city : ');
  persondata.state = readlineSync.question('enter state : ');
  persondata.zipCode = readlineSync.questionInt('enter zipcode :');
  Obj = {
    "firstName":persondata.firstName,
   "lastName" :persondata. lastName,
    "emailId" : persondata.emailId,
    "phoneNumebr":persondata.phoneNumber,
    "city":persondata.city,
    "state":persondata.state,
    "zipCode":persondata.zipCode
   
}
var persondetails = []
persondetails.push(Obj);  
console.log(persondetails)
  
fs.readFile('persondata.json', 'utf8', function (err, data) {
   
     persondetails = JSON.parse(data);
     persondetails.push(Obj);  
    json = JSON.stringify(persondetails);

     fs.writeFile('persondata.json', JSON.stringify(persondetails), 'utf8', (err) =>{
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
        
    })
})
console.log(" Contact details added");
}


function displayDetails() { 
    fs.readFile('./persondata.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
}


function searchDetails(city) {
    console.log("City searched: ", city);
    var contactdata = persondetails
    const details = contactdata
    for (let i = 0; i < details.length; i++) {
        if (details[i].city.toLowerCase() == city.toLowerCase()) {
            console.log(details[i]);
        }
    }
}




function deleteDetails(deletecity) {
    var data = persondetails
    const deletedetails = data   
    const removedetails = deletedetails.findIndex(item => item.city === deletecity);
    deletedetails.splice(removedetails, 1); 
    fs.writeFileSync('contact.json', JSON.stringify(deletedetails));
    console.log("Contact deleted!")
}
displayDetails();


