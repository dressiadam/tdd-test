/**
 * Created by adam.drescher on 2015-03-12.
 */
var assert = require('chai').assert,
	Exercise = require('../libs/exercise');

suite('Requests test', function() {
	setup(function() {
		this.exercise = new Exercise();
	});

	teardown(function() {

	});

	test('Returns an array', function() {
		assert.deepEqual(this.exercise.returnAnArray(), ['a','b','c'], 'It is an array');
	});
});