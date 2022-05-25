/*
//VARIABLE IN JAVASCRIPT 
//A variable is a container for storing data
//A variable behave as if it was the valeu that it contain 

// Two Step:
//1.Decleration (Var. let cost)
//2. Assignment (= assignment operator )

let FirstName = "DpoShmurda"; //strings
let Age = 21;//numbers
let Student =true;//Boolean
let firstname= null;

Age= Age+1

console.log("hello", FirstName);
console.log("you are", Age, "years old");
console.log("Enrolled:", Student )


document.getElementById("p1").innerHTML = "hello" + FirstName;
document.getElementById("p2").innerHTML = "Hello" +  Age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + Student;
*/



/*arithemati expression is a combination of ...
  operand (values. variables, etc. )
  operators ( + - * / %)
  that can be evaluated to the value 
  ex, y = x + 5;
  expernociation (square **)
  */


//  let student = 20;

  //student =  student + 1;
  //student =  student - 1;
  //student =  student * 2;
  //student =  student / 2;
  //let remeningstudent=(student) % 2;
  //student = student **2

  //shotcut 

 // student +=1
// student -= 1
//student *=2

  //console.log(student);


/*
  OPERATOR PRECEDENCE
  1. parathesis
  2. exponents
  3. multiplication & division
  4. addition & substraction
*/
//let result = 1 + 2 * (3+4);
//console.log(result);



/*
//HOW TO ACCEPT INPUT 
//EASY WAY

//let username = window.prompt("what is your user name ");
//console.log(username);

//DIFICULT WAY

let username;

document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "hello" + username;
}
*/