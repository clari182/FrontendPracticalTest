/*When loading, checks if the cookie exists or not and loads the corresponding button*/
function createButton(){
	cookieSaved() ? logoutBtn() : loginBtn();
}

function updateCookie(){
	cookieSaved() ? removeCookie() : createCookie();
	$('#modal-login').modal('toggle');
}

//Checks if the cookie is saved
function cookieSaved(){
	return $.cookie('username') === 'password' ? true : false;	
}

//Removes the cookie when click on logout
function removeCookie() {
	$.removeCookie('username');	
	loginBtn ();
}

//Creates the cookie
function createCookie() {
	var mid = $.cookie('username', 'password');
	logoutBtn();
}

//Shows logout button and cookie monster
function logoutBtn() {
	$('#loginBtn').hide();
	$('#logoutBtn').show();
	$('.cookie').show();
}

//Shows login button and hides logout and cookie monster
function loginBtn(){
	$('#loginBtn').show();
	$('#logoutBtn').hide();
	$('.cookie').hide();
}