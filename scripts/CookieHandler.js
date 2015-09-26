function createButton(){
	cookieSaved() ? logoutBtn() : loginBtn();
}

function updateCookie(){
	cookieSaved() ? removeCookie() : createCookie();
	$('#modal-login').modal('toggle');
}

function cookieSaved(){
	return $.cookie('username') === 'password' ? true : false;	
}

function removeCookie() {
	$.removeCookie('username');	
	loginBtn ();
}

function createCookie() {
	var mid = $.cookie('username', 'password');
	logoutBtn();
}

function logoutBtn() {
	$('#loginBtn').hide();
	$('#logoutBtn').show();
	$('.cookie').show();
}

function loginBtn(){
	$('#loginBtn').show();
	$('#logoutBtn').hide();
	$('.cookie').hide();
}