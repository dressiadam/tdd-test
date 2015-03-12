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

	test('Returns current value string', function() {
		assert.deepEqual(this.exercise.addNewInputString('alpha'), ['alpha'], 'Returns an array');
	});

	test('Coma test', function() {
		assert.deepEqual(this.exercise.addNewInputString('alpha,beta,gamma'), ['alpha', 'beta', 'gamma'], 'Returns an array, coma separators');
		assert.deepEqual(this.exercise.addNewInputString('10,20,30'), ['10', '20', '30'], 'Returns an array, coma separators');
		assert.deepEqual(this.exercise.addNewInputString('a,b,a@b.hu'), ['a', 'b', 'a@b.hu'], 'Returns an array, coma separators');
	});

	test('Multi line string input test', function() {
		assert.deepEqual(this.exercise.addNewInputMultiLine('alpha,beta\ngamma'), [['1', '2', '3'], ['alpha', 'beta', 'gamma']], 'Returns an 2 dimensional array');
	});
});