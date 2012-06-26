window.onload = init;

function init() {
	var nav = document.querySelector('#menu-button');
	//console.log('click', nav);
	nav.onclick = navClick	
}

function navClick(e) {
	//console.log('CLICK!')
	var cover = document.querySelector('#cover');
	//console.log(cover)
	cover.className= (cover.className=="active")? "":"active";
	var nav = document.querySelector('#nav');
	nav.className= (nav.className=="active")? "":"active";

	var menu = document.querySelector('#menu-button');
	menu.className= (menu.className=="active")? "":"active";
}


