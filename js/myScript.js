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








