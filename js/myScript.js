//1-Variables

//variable stores data values
// variables must have identifiers 
//that are not JS keywords
var x = 100;
var y = 2;
var z = x/y;
document.getElementById("demo").innerHTML = z;
console.log(z);

var city = "NYC";
var park= "Central Park"
var boating = city + " " + park
document.getElementById("demo2").innerHTML = boating
console.log(boating);

var week = ['mon','tues','wed','thur','fri','sat','sun'];
var play = ['rest','run','run','bike','rest','longRun','longRun'];

function schedule (weekday){
	if(weekday===week[0]){
		alert(play[0]);
	} else if(weekday===week[1]){
		alert(play[1]);
	} else if (weekday===week[2]){
		alert(play[2]);
	} else if (weekday===week[3]){
		alert(play[3]);
	} else if(weekday===week[4]){
		alert(play[4]);
	} else if(weekday===week[5]){
		alert(play[5]);
	} else if(weekday===week[6]){
		alert(play[6]);
	} else {
		alert ("invalid");
	}
}

schedule (week[0]);
schedule (week[1]);
schedule (week[3]);
schedule (week[4]);
schedule (week[5]);
schedule (week[6]);

// 2-Debugging
// use console.log via chrome developer JS Console
//use console.log() to display JS values in the debugger window
// is for single line comment
/* is for multiple line comments */ 
//alert is used as pop-up. the output can be seen once the alert() function is called

// Datatype - number, string, boolean, undefined (no value)


// testing - a test returns a true or false (a boolean)

//The if statement
//The if statement allows us to run code only if a certain test
//evaluates to true

if (1===2){
	console.log("this is false");
}

if (1=="1"){
	console.log("this is true because data type is not tested");

}

function someName (name){
	console.log ("my name is" +" "+ name);
}

someName ("joyce");

var colors =['red', 'black', 'white'];

function redcolortest (primaryColor) {
	if(primaryColor=colors[0]){
		console.log("true");
	} else if (primaryColor=colors[1]) {
		cosole.log("false");
	} else if (primaryColor=color[2]){
		cosole.log("false");
	} else{
		console.log("false");
	}
}

redcolortest ('red');
redcolortest (colors[2]); // i don't know why this is true, it should be false
redcolortest (colors[1]);  //i don't know why this is true, it should be false









