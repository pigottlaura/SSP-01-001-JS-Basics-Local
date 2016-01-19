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
myArray.push(5);
console.log("hello " + myArray[0]);

// Declare, Create and Initialise myOtherArray Array
var myOtherArray = [22, 33, 45];
console.log(myOtherArray[0]);

//Declare, Create and Initalise Person Object
var person = {
	name: "Laura", 
	age:28, 
	female:true, 
	growOld: function() {
		this.age++;
	},
	friends: ["Tom", "Pat"]
};
console.log("Young = " + person.age);
person.growOld();
console.log("Older = " + person.age);
for(friend in person.friends)
{
	console.log(person.name + " is friends with " + person.friends[friend]);
}

// Declare and Create otherPerson. 
// Initialise properties later (if they don't already exist, JS will just add them)
var otherPerson = {};
otherPerson.name = "Eiren";
otherPerson.age = 21;
otherPerson.female = true;
otherPerson.growOld = function(){
	this.age++;
};
otherPerson.friends = ["Amy", "Harry"];
console.log(otherPerson.name);
for(var i = 0; i < otherPerson.friends.length; i++)
{
	console.log(otherPerson.name + " is friends with " + otherPerson.friends[i]);
}

var myFunction = function(a, b){
	return a + b;
}
console.log(myFunction(1, 6) + " = named function result");
/*
Java or ActionScript (Create a class, and then create an object of that class)

public class Person{
	public var name:String;
	public var age:int;
	public var female:Boolean;

	public function Person(){
		//default to female
		this.female = true;
	}

	public function growOld():void
	{
		this.age++;
	}
} 

var p:Person = new Person();
p.name = "Laura";
p.age = 21
p.female = true;

p.growOld();
*/

