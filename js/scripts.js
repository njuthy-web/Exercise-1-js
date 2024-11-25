/// This function is to show hello world


/*\
 1, dfdff
 3 dfd
4. multiline comments

*/
//dfdfd


// var firstName = "Nuren";
// var lastName = "Juthy";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// var num1 = 40;
// var num2 = 6;
// var sum = num1 + num2;

// var subtraction = num1 - num2;


// function minus_Numbers(){

    
//     var firstNumber =1024;
//     var secondNumber =128;
//     var result =firstNumber-secondNumber ;
//     console.log(result);
//     alert(result);
    
//     }
    
//     minus_Numbers(1024,128);


// function division_Numbers(number1,number2) {

    
   
//     var result =number1/number2 ;
//     return result;
    
    
//     }

    
//    var minus_Numbers=minus_Number(1024,128);
//    var minus_Numbers=minus_Number(1024,128);
//    var minus_Numbers=minus_Number(1024,128);

//    alert (minus_Number,minus_Number,minus_Number)


// var students = [ "nusrat" , "mitu", "juthy","sayma" ];

// console.log(students2)


// function divisionNumbers(c){

//     var result = (9 * c / 5) + 32
//     return result;
// }

// var divisionResult = divisionNumbers(38);
// console.log(divisionResult);

// document.getElementById("fahr_1").innerText=divisionResult;


// function divisionNumbers(c){

//     var result = (9 * c / 5) + 32
//     return result;
// }


// var divisionResult = divisionNumbers(38);
// console.log(divisionResult);

// document.getElementById("fahr_1").innerText=divisionResult;


// function divisionNumbers(c){

//     var result = (9 * c / 5) + 32
//     return result;
// }


// var divisionResult = divisionNumbers(24);
// console.log(divisionResult);

// document.getElementById("fahr_2").innerText=divisionResult;


// function divisionNumbers(c){

//     var result = (9 * c / 5) + 32
//     return result;
// }



// var divisionResult = divisionNumbers(-1);
// console.log(divisionResult);

// document.getElementById("fahr_3").innerText=divisionResult;


// function divisionNumbers(c){

//     var result = (9 * c / 5) + 32
//     return result;
// }




// document.getElementById("color_button").onclick = function () {
//     document.getElementById("color_button2").style.background = "red";
//     document.getElementById("color_button2").style.display = "inline";
//     document.getElementById("crossButton").style.display = "inline";
// }
// document.getElementById("crossButton").onclick = function () {
//     document.getElementById("color_button2").style.display = "none";

//     document.getElementById("crossButton").style.display = "none";
// }



// var clickButton = document.getElementById("color_button");
// var showButton = document.getElementById("hide")

// clickButton.onclick = function () {
//     document.getElementById('box2').classList.add("show")
// }

// showButton.onclick = function () {
//     document.getElementById("box2").classList.remove("show")
// }


// var divisionResult= divisionnu



function number(c) {
    var numbers=(9*c/5)+32;
    return numbers;
}

var result=number(38);
console.log(result);
document.getElementById("fahr_1").innerHTML=result;



function number(c) {
    var numbers=(9*c/5)+32;
    return numbers;
}

var result=number(24);
console.log(result);
document.getElementById("fahr_2").innerHTML=result;




function number(c) {
    var numbers=(9*c/5)+32;
    return numbers;
}

var result=number(-1);
console.log(result);
document.getElementById("fahr_3").innerHTML=result;



var classification = [ "John Hill", "Mary Jane" , "Gary Vee" , "paricia Mills" , "Helen Hall" , "Paul Green"];
classification.shift();
console.log(classification);


var classification = [  "Mary Jane" , "Gary Vee" , "paricia Mills" , "Helen Hall" , "Paul Green"];
classification.shift();
console.log(classification);


var classification = [  "Gary Vee" , "paricia Mills" , "Helen Hall" , "Paul Green"];
classification.shift();
console.log(classification);
document.getElementById("best_students").innerHTML=classification




var course = {
    'title' : "Learn to Code in Python 3" ,
    'categories' : ['programming', 'tecnology', 'python'],
    '5_starts_reviews': 420,
    '4_starts_reviews':80,
    '3_starts_reviews':33,
    '2_starts_reviews':20,
    '1_starts_reviews':4
}


console.log(course.title);
document.getElementById("course_title").innerHTML=course.title

console.log(course['categories'][0]);
document.getElementById("main_category").innerHTML=course['categories'][0]
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("Chocolate");
console.log(shoppingList);



var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
shoppingList.push("Cheese");
shoppingList.push("Eggs");


console.log(shoppingList);



function sum_args(num1,num2,num3,num4,num5) {
    var sum  = num1 + num2 + num3 + num4 + num5;
    console.log(sum);
}
sum_args(420,80,33,20,4);
var average=(420/557)*100;
console.log(average);
var roundNumber = Math.round ( 75.40394973070018);
console.log(roundNumber);
var name ="75";
name += "%";
console.log(name)
document.getElementById("reviews_5_stars").innerHTML=name;
document.getElementById("click-me").onclick = function(){
    alert('are u human');
};


document.getElementById("hover-me").onclick = function(){
    alert('take your cap');
};

document.getElementById("leave-me").onclick = function(){
    alert('you moved too much');
};

document.getElementById("see-me").onclick = function() {
    alert('do not go there');
};


var button = document.getElementById("color_button");
button.onclick = function() {
    document.getElementById("button_one") .style .display ="block";
}


document.getElementById("color_button").onclick = function() {
    this.style['background-color'] ="orange";
};


// document.getElementById("button_one").onclick = function() {
//     this.style["background-color"] ="aqua";
//     this.style.transform = "translateY(-10)";
// };


// var button = document.getElementById("button_two");

// button.onclick=function() {
//     button.style["background-color"]="red";
//     button.style.transform="translateX(10px)";
// };


// var clickButton = document.getElementById("color_button");
// var showButton = document.getElementById("button_two");

// clickButton.onclick=function() {
//     document.getElementById("button_one").classList.toggle("show")
// }

// showButton.onclick=function() {
//     document.getElementById("button_one").classList.toggle("show")
// }