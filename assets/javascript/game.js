
var target
var current = 0
var one
var two
var three
var four
var used = [];
var number


$(document).ready(function(){

	start();


	$("#first-img").on("click", function(){
	var tempnumber = current;
	current = tempnumber + one;
	displaycurrent();
	checkwin();
	console.log(one)
	})

	$("#second-img").on("click", function(){
		console.log(100);
		var tempnumber = current;
		current = tempnumber + two;
		displaycurrent();
		checkwin();
	})

	$("#third-img").on("click", function(){
		var tempnumber = current;
		current = tempnumber + three;
		displaycurrent();
		checkwin();
	})

	$("#fourth-img").on("click", function(){
		var tempnumber = current;
		current = tempnumber + four;
		displaycurrent();
		checkwin();
	})




})




//Math.floor(Math.random() * ("number of possible values") + "starting value")

var start = function(){
	newTarget();
	current = 0;
	newImage1();
	newImage2();
	newImage3();
	newImage4();
	displaytotal();
	displaycurrent();
	used = [];
}

var newTarget = function(){
	target = Math.floor(Math.random() * (90) + 30)
	console.log(target);
}


var newImage1 = function(){
	one = Math.floor(Math.random() * (12) + 1);
	used.push(one);
	console.log(one);
	// console.log("Array " + used);

}

var displaycurrent = function(){
	$("#score").text(current);
}

var newImage2 = function(){
	number = Math.floor(Math.random() * (12) + 1)
	if (used.indexOf(number) === -1){
		two = number;
		used.push(number);
	}
	else {
		newImage2();
		return;
	}
	console.log(two);
	// console.log("Array " + used);
}

var newImage3 = function(){
	number = Math.floor(Math.random() * (12) + 1)
	if (used.indexOf(number) === -1){
		three = number;
		used.push(number);
	}
	else {
		newImage2();
		return;
	}
	console.log(three);
	// console.log("Array " + used);
}

var newImage4 = function(){
	number = Math.floor(Math.random() * (12) + 1)
	if (used.indexOf(number) === -1){
		four = number;
		used.push(number);
	}
	else {
		newImage2();
		return;
	}
	console.log(four);
	// console.log("Array " + used);
}

var displaytotal = function(){
	$("#target").text(target);
}

var checkwin = function(){
	if (current === target){
		alert("You won you sexy thing you");
		start();
	}
	else if (current > target){
		alert("You lost. Maybe think about your life choices.");
		start();
	}
}







// $("#second-img").on("click", function(){
// 	console.log(200);
// })