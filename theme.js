var theme = document.querySelector("img");
var jumbo = document.querySelector(".jumbotron");
var navbar = document.querySelector(".tentaclenav");
var body = document.querySelector("body");
var navbarTheme = document.querySelector(".navbar-light");
var dropdown = document.querySelectorAll(".tentacledrop");
var dropdownItem = document.querySelectorAll(".dropdown-item");

setThemeFromCookie();

theme.onclick = function (){
	if (jumbo.classList.contains("jumbotron")){
		jumbo.classList.add("dark-jumbo");
		jumbo.classList.remove("jumbotron");
	} else {
		jumbo.classList.add("jumbotron");
		jumbo.classList.remove("dark-jumbo");
	}
	if (navbar.classList.contains("tentaclenav")){
		navbar.classList.add("tentaclenav-dark");
		navbar.classList.remove("tentaclenav");
	} else {
		navbar.classList.add("tentaclenav");
		navbar.classList.remove("tentaclenav-dark");
	}
	if (body.classList.contains("light-body")){
		body.classList.add("dark-body");
		body.classList.remove("light-body");
		document.cookie = "darkTheme";
	} else {
		body.classList.remove("dark-body");
		body.classList.add("light-body");
		document.cookie = "lightTheme"
	}
	if (navbarTheme.classList.contains("navbar-light")) {
		navbarTheme.classList.add("navbar-dark");
		navbarTheme.classList.remove("navbar-light");
	} else {
		navbarTheme.classList.add("navbar-light");
		navbarTheme.classList.remove("navbar-dark");
	}
	for (i = 0; i < dropdown.length; i++){
		if (dropdown[i].classList.contains("tentacledrop")) {
			dropdown[i].classList.add("tentacledrop-dark");
			dropdown[i].classList.remove("tentacledrop");
		} else {
			dropdown[i].classList.add("tentacledrop");
			dropdown[i].classList.remove("tentacledrop-dark");
		}	
	}
	for (i = 0; i < dropdownItem.length; i++){
		if (dropdownItem[i].classList.contains("dropdown-item")){
			dropdownItem[i].classList.add("dropdown-item-dark");
			dropdownItem[i].classList.remove("dropdown-item");
		} else {
			dropdownItem[i].classList.add("dropdown-item");
			dropdownItem[i].classList.remove("dropdown-item-dark");
		}
	}
}

function isDarkThemeSelected(){
	return document.cookie.match(/darkTheme/i) != null;
}

function setThemeFromCookie(){
	body.className = isDarkThemeSelected() ? "dark-body" : "light-body";
}