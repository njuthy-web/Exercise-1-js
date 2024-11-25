document.getElementById("student_message").innerHTML="Hi,my name is juthy, I'm 21 years old and I'm learning Javascript";

var num_1=101;
var num_2=7
var division = num_1 /num_2;
console.log(division.toFixed(2));


document.getElementById("result").innerHTML=division.toFixed(2);
var phone1 = "988866552";
if( phone1.length ==9 ) {
    console.log(phone1+" valid");
}else{
    console.log(phone1 + "invalid");
}


var phone2 = "99087612366";
if( phone2.length ==9 ) {
    console.log(phone2+" valid");
}else{
    console.log(phone2 + "invalid");
}


var phone3 = "876543123";
if( phone3.length ==9 ) {
    console.log(phone3+" valid");
}else{
    console.log(phone3 + "invalid");
}


var power = Math.pow(32,6);
console.log(power);


var quantity = "25";
console.log(quantity+=quantity);
var temperature =null;
console.log(temperature);
console.log(typeof temperature);
var pressure;
console.log(typeof pressure);


var getAddress = document.getElementById("url_1").innerText;
var modifiedAdress = "https://"+getAddress;

document.getElementById("url_2").innerText = modifiedAdress

var url = "https://www.google.com ";
console.log(url.replace( "https://" , ""));
document.getElementById("url_4").innerHTML=url.replace("https://" , "");




// var url = "https://";
// var ur12 = "www.udemy.com";

// var fullName = url + url2;
// console.log(fullName);
// document.getElementById("url_2").innerHTML= (fullName) ;