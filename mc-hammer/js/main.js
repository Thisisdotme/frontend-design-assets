window.onload = init;

function init() {
	var nav = document.querySelector('#menu-button');
	//console.log(nav);
	nav.onclick = navClick	
}

function navClick(e) {
	var cover = document.querySelector('#cover');
	cover.className= (cover.className=="active")? "":"active";
}
