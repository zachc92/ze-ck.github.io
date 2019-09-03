var theme = document.querySelector("#meteor");

theme.onclick = function(){
	setTheme();
}

function setTheme(){
	$('nav').toggleClass("tentaclenav");
	$('nav').toggleClass("tentaclenav-dark");
	$('nav').toggleClass("navbar-light");
	$('nav').toggleClass("navbar-dark");
	$('body').toggleClass("light-body");
	$('body').toggleClass("dark-body");
	$('div .dropdown-menu').toggleClass("tentacledrop");
	$('div .dropdown-menu').toggleClass("tentacledrop-dark");
	$('div .dropdown-menu a').toggleClass("dropdown-item");
	$('div .dropdown-menu a').toggleClass("dropdown-item-dark");
	$('hr').toggleClass("lightHr");
	$('hr').toggleClass("darkHr");
}