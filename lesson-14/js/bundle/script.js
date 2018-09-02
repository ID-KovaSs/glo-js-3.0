/*jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js');
	let timer = require('../parts/timer.js');
	let modal = require('../parts/modal.js');
	let scroll = require('../parts/scroll.js');
	let phoneMask = require('../parts/phoneMask.js');
	let ajaxForm = require('../parts/ajaxForm.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');

	tab();
	timer();
	modal();
	scroll();
	phoneMask();
	ajaxForm();
	slider();
	calc();

});