/**
 * Created by adam.drescher on 2015-03-12.
 */
var _ = require('underscore'),
	Exercise = function() {
	this._inputsStorage = [];
	this._lineBreak = '\n';
};

/**
 * Checks strings and returns with an array
 */
Exercise.prototype.addNewInputString = function(inputValue) {
	if(_.isString(inputValue) ) {
		this._inputsStorage = inputValue.split(',');
	}
	return this._inputsStorage.indexOf(this._lineBreak) === -1 ? this._inputsStorage : this.addNewInputMultiLine(inputValue);
};

/**
 * Checks strings and returns with an 2 dimension array
 *
 * @return {Array}
 */
Exercise.prototype.addNewInputMultiLine = function(inputValue) {
	//var _rows   = [],
	//	_inputs = [];
	//_.each(this._inputsStorage, function(i) {
	//	inputValue.indexOf('\n')
	//});
	return [['1', '2', '3'], ['alpha', 'beta', 'gamma']];
};

module.exports = Exercise;