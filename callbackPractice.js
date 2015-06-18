//Here we have a function that takes a function called "callback" as an argument and then invokes that
//functin in the doSomething function body
function doSomething(callback) { // “callback” is intended to be a function
	return callback();			 // We invoke “callback” by adding parenthesis
}

function sayHi() { //this is the function we will pass in as the parameter to doSomething
	alert("hi");
}

//do call the function within an function
doSomething(sayHi);

//Two basic functions: add 2 numbers, multiply 2 numbers
function add(a,b) {
	return a+b;
}

function multiply(a,b){
	return a*b;
}

//Now let's create a host function designed to take one of the above functions as a callback
function doMath(a,b,callback) {
	return callback(a,b);
}

//now, let's take the add function and place it in our doMath host function
doMath(2,3,add) //returns 5

//now, let's replace the callback with our multiply function
doMath(2,3,multiply)

//you can also write anonymous callback functions that return the same result
doMath(2,2, function(a,b){
	return a*b
})

//More examples of callbacks
//First, setup the generic poem creator function; it will be the callback function in the getUserInput function below
function genericPoemMaker(name,gender) {
	console.log(name + " is finer than fine wine.");
	console.log("Altruistic and noblie for the modern time.");
	console.log("Always admirably adorned with the latest style");
	console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above
function getUserInput(firstName, lastName, gender, callback) {
	var fullName = firstName + " " + lastName;
	//Make sure the callback is a function
	if(typeof callback === "function") {
	//execute the callback function and pass the parameters to it
	callback(fullName, gender);
	}
}

//call the getUsetInput function and pass the genericPoemMaker function as a callback:
getUserInput("Michael", "Fassbender", "man", genericPoemMaker);


//Because the getUserInput function is only handling the retrieving of data, we can pass any callback to it.
//For example, we can pass a greetUser function like this:

function greetUser(customerName, sex) {
	var salutation = sex && sex === "Man" ? "Mr." : "Ms."; //if sex === "Man" then salutation = "Mr.", else salutation = "Ms."
	console.log("Hello, " + salutation + " " + customerName);
}

//Pass the greetUser function as a callback to getUserInput
getUserInput("Bill", "Gates", "Man", greetUser);

//output
//Hello, Mr. Bill Gates.

















