//Select HTML Document or var
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//ShowError method
function showError(input,message){
	const formControl = input.parentElement;
	formControl.className = 'form-control-js error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//Show success method
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control-js success';
	
}

// Email validation in regexp
function checkEmail(input){
const reg=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if(reg.test(input.value.trim())){
		showSuccess(input);
	}
	else{
		showError(input,"Email is not valid");
	}
}

function checkedRequired(inputArr){
	inputArr.forEach(function(input){
		if(input.value.trim() === ''){
			showError(input,`${getToUper(input)} is required`);
		}
		else{
			showSuccess(input);
		}
	})
}
//getToUper
function getToUper(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//checkLength
function checkLength(input, min, max){
	if(input.value.length < min){
		showError(input, `${getToUper(input)} must be at least ${min} characters`);
	}
	else if(input.value.length > max){
		showError(input, `${getToUper(input)} must be less than ${max} characters`);	
	}
	else{
		showSuccess(input);
	}
}
//checkLength2
function checkLength2(input, min, max){
	if(input.value.length < min){
		showError(input, `${getToUper(input)} must be at least ${min} characters`);
	}
	else if(input.value.length > max){
		showError(input, `${getToUper(input)} must be less than ${max} characters`);	
	}
	else{
		showSuccess(input);
	}
}

//Password checking


// Event listeners
form.addEventListener('submit', function(e){
	e.preventDefault();
	
	checkedRequired([fname,lname,email,password,password2,]);
	checkLength(fname, 3, 15);
	checkLength(password, 6, 25);
	checkLength2(password2, 6, 25);
	
	checkEmail(email);
	
	// First Name
	/* if(fname.value === '') {
		showError(fname, 'This field must be required');
	}
	else{
		showSuccess(fname);
	}
	// Last Name
	if(lname.value === '') {
		showError(lname, 'This field must be required');
	}
	else{
		showSuccess(lname);
	}
	// Email Name
	if(email.value === '') {
		showError(email, 'Email field must be required');
	}
	else if(!isValidEmail(email.value)){
		showError(email, 'email is not valid');
	}
	else{
		showSuccess(email);
	}
	// Password Name
	if(password.value === ''){
		showError(password, 'This field must be required');
	}
	else{
		showSuccess(password);
	} */
})

// preloader	
	setTimeout(function(){
		$(".preloader").fadeToggle();
	},2000);
	
// Scroll to top

// courasel 
var photos = ["images/1.jpg","images/2.jpg","images/3.jpg"];
var len = photos.length;

var imageTag = document.querySelector("img");
var count = 0;

function prev(){
	count++;
	
	if(count >= len){
		count = 0;
		imageTag.src = photos[count];
	}
	else{
		imageTag.src = photos[count];
	}
}
function next(){
		count--;
	
	if(count < 0){
		count = len-1;
		imageTag.src = photos[count];
	}
	else{
		imageTag.src = photos[count];
	}
}

// Scroll to top
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.transition = ".3s";
  } else {
    mybutton.style.display = "none";
    mybutton.style.display = ".3s";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}