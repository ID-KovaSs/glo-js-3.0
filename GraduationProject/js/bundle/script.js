/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let headerSlider = require('../parts/headerSlider.js');
	let popup = require('../parts/popup.js');
	let addBlocks = require('../parts/addBlocks.js');
	let portfolioTabs = require('../parts/portfolioTabs.js');
	let calc = require('../parts/calc.js');
	let replaceImg = require('../parts/replaceImg.js');
	let accordion = require('../parts/accordion.js');
	
	headerSlider();
	popup();
	addBlocks();
	portfolioTabs();
	calc();
	replaceImg();
	accordion();
	
});