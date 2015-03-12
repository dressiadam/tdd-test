/**
 * Created by adam.drescher on 2015-03-12.
 */
var _ = require('underscore'),
	Exercise = function() {
	this._inputsStorage = [];
};

/**
 * Checks strings and returns with an array
 */
Exercise.prototype.addNewInputString = function(inputValue) {
	if(_.isString(inputValue) ) {
		this._inputsStorage = inputValue.split(',');
	}
	return this._inputsStorage;
};

module.exports = Exercise;