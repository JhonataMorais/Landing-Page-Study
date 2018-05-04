// Code With Pure JavaScript
const nav = document.querySelector('.x-nav');
const hamburguer = document.querySelector('.x-hamburguer');
let screenWidth = window.innerWidth;

const menuMobile = () => {
	if(screenWidth < 1024) {
		nav.classList.toggle('x-navActive');
		hamburguer.classList.toggle('x-hamburguerActive');
	}
}

// Init Functions

hamburguer.addEventListener('click', menuMobile);

// End code with pure JavaScript

// Code with jQuery

// First Slick

function firstSlick(){
	$('.x-list__firstBanners').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 800,
		dots: false,
		fade: false,
		arrows: true
	});
}

// Second Slick

function secondSlick(){
	$('.x-list__secondBanners').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 800,
		dots: false,
		fade: false,
		arrows: true
	});
}

// Init Slicks 

$(document).ready(function(){
	firstSlick();
	secondSlick();
});

// End code with jQuery