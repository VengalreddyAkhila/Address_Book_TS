var readlineSync = require('readline-sync');
var json;
var obj;
var persondetails = require("./persondata.json");
var fs = require("fs");
var Person = /** @class */ (function () {
    function Person(firstName, lastName, emailId, phoneNumber, city, state, zipCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
    return Person;
}());
var getdata = new Person("anu", "ram", "anu@gmail.com", 9786545634, "gadwal", "telangana", 509345);
console.log(getdata);
function addpersondetails() {
    var persondata = new Person("anu", "ram", "anu@gmail.com", 9786545634, "gadwal", "telangana", 509345);
    persondata.firstName = readlineSync.question('enter firstname');
    persondata.lastName = readlineSync.question('enter lastname');
    persondata.emailId = readlineSync.question('enter mail id');
    persondata.phoneNumber = readlineSync.question('enter phonenumber');
    persondata.city = readlineSync.question('enter city');
    persondata.state = readlineSync.question('enter state');
    persondata.zipCode = readlineSync.question('enter zipcode');
    var dataobj = [];
    obj = {
        "firstName": persondata.firstName,
        "lastName": persondata.lastName,
        "emailId": persondata.emailId,
        "phoneNumebr": persondata.phoneNumber,
        "city": persondata.city,
        "state": persondata.state,
        "zipCode": persondata.zipCode
    };
    dataobj.push[obj];
    fs.readFile('data.json', 'utf8', function (err, data) {
        dataobj = JSON.parse(data);
        dataobj.push(obj);
        fs.writeFile("data.json", JSON.stringify(dataobj), function (err) {
            console.log(err);
        });
    });
}
