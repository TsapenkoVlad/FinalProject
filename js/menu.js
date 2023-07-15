(function($) { "use strict";
	let app = function () {
		let body = undefined;
		let menu = undefined;
		let menuItems = undefined;
		let citySelect = undefined;
		let city = undefined;
		let init = function init() {
		    citySelect = $('#city').val(localStorage.getItem('city'));
			city = localStorage.getItem('city');
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		let applyListeners = () => {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		let toggleClass = (element, stringClass) => {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		
		init();
	}();	
})(jQuery); 


const changeCity = () => {
	const city = document.querySelector('#city');
	if(localStorage.getItem('city') !== null && localStorage.getItem('city').length > 0) {
		localStorage.removeItem('city');
	}
	localStorage.setItem('city', city.value);
};