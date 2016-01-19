# Welcome

This is my *first* SSP project of the year. For more about SSP see [LIT Website](http://www.lit.ie/) **goodbye**

Here is an example of creating objects, arrays etc in JavaScript and ActionScript.

Create a person in JavaScript using an Object:

```
var person = {
	name: "Laura",
	age: 28,
	growOld: function(){
		this.age++;
	}
}
```

or create a person in ActionScript using a Class
```
public class Person{
	public var name:String;
	public var age:int;

	public function Person(){
	}

	public function growOld():void
	{
		this.age++;
	}
} 

var p:Person = new Person();
p.name = "Laura";
p.age = 21

p.growOld();
```

To read more see [here](JSBasics.md).