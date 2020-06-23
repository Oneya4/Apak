/*progress bar*/
window.onscroll = function() {myScroll()};
function myScroll(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  	var scrolled = (winScroll / height) * 100;
  	document.getElementById("Progbar").style.width = scrolled + "%";
}

/*displaying menu items*/
function myFunction(x) {
  x.classList.toggle("change");
}

const selectElement = function (element) {
	return document.querySelector (element);
};

let menuToggler = selectElement('.menu');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
	body.classList.toggle('open');

});