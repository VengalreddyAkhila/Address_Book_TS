
export { readlineSync, persondetails, Person, addDetails, displayDetails }
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

// let getdata = new  Person("anu","ram","anu@gmail.com",9786545634,"gadwal","telangana",509345);
// console.log(getdata)

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

// function updateDetails(){
//     var contactData =  persondetails
// }

function UpdateData(editId) {
    console.log("editid", editId);
    var data = persondetails
    const details = data
    let isAvailable = false;
    for (let i = 0; i < details.length; i++) {
        if (details[i].id === editId) {
            console.log('Update contact for id = ' + editId)
            let editAddress: string = readlineSync.question(' Enter the new Name ')
            let editCity: string = readlineSync.question(' Enter the new city ')
            let editZip: string = readlineSync.question(' Enter the new state ')
            let editMob: number = readlineSync.questionInt('Enter the new phone number')
            details[i].address = editAddress;
            details[i].city = editCity;
            details[i].zip = editZip;
            details[i].mob = editMob;
            isAvailable = true;
        }
    }
    if (isAvailable == true) {
        fs.writeFileSync('contact.json', JSON.stringify(details, null, 2));
        console.log("Contact updated!")
    }
    else {
        console.log("Entry not found.")
    }
}



