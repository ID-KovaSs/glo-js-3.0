/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let headerSlider = require('../parts/headerSlider.js');
	let popup = require('../parts/popup.js');
	let addBlocks = require('../parts/addBlocks.js');
	let portfolioTabs = require('../parts/portfolioTabs.js');
	let calc = require('../parts/calc.js');
	
	headerSlider();
	popup();
	addBlocks();
	portfolioTabs();
	calc();
	
});