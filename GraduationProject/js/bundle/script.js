/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let headerSlider = require('../parts/headerSlider.js');
	let popup = require('../parts/popup.js');
	let addBlocks = require('../parts/addBlocks.js');
	
	headerSlider();
	popup();
	addBlocks();
	
});