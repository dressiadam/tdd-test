/**
 * Created by adam.drescher on 2015-03-12.
 */
var Exercise = function() {
	this._inputsStorage = [];
};

/**
 * Returns with an array
 */
Exercise.prototype.returnAnArray = function() {
	return ['a', 'b', 'c'];
};

/**
 * Returns with an array
 */
Exercise.prototype.addNewInputString = function(inputValue) {
	this._inputsStorage.push(inputValue);
	return this._inputsStorage;
};

module.exports = Exercise