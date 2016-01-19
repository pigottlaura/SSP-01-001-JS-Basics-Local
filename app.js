console.log("Hello World");

function add(a, b)
{
	var theAnswer = a + b;
	console.log(a + " + " + b + " = " + theAnswer);
	return theAnswer;
}

var ans = add(4, 3);

var name = "Laura"; //String
var age = 28; //int
var female = true; //Boolean

if(age < 30)
{
	console.log("You're still young");
}

var object = new Object();

var otherObject = {a: 5, b: 10};
console.log(otherObject.a);

var myArray = new Array();

var myOtherArray = [22, 33, 45];
console.log(myOtherArray[0]);