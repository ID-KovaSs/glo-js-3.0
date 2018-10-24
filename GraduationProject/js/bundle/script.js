/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let headerSlider = require('../parts/headerSlider.js'),
			popup = require('../parts/popup.js'),
			addBlocks = require('../parts/addBlocks.js'),
			portfolioTabs = require('../parts/portfolioTabs.js'),
			calc = require('../parts/calc.js'),
			replaceImg = require('../parts/replaceImg.js'),
			accordion = require('../parts/accordion.js'),
			burgerMenu = require('../parts/burgerMenu.js'),
			ajaxForm = require('../parts/ajaxForm.js'),
			slider = require('../parts/slider.js'),
			checkRus = require('../parts/checkRus.js'),
			phoneMask = require('../parts/phoneMask.js');
	
	headerSlider();
	popup();
	addBlocks();
	portfolioTabs();
	calc();
	replaceImg();
	accordion();
	burgerMenu();
	ajaxForm();
	slider();
	checkRus();
	phoneMask();
	
});