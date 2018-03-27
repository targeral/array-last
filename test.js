'use strict';

require('mocha')
const assert = require('assert')
const last = require('./')

describe('last', () => {
  it('should throw an error if invalid argument are passed', () => {
    assert.throws(() => {
      last()
    }, /expected/i)

    assert.throws(() => {
      last('foo')
    }, /expected/i)

    assert.throws(() => {
      last({ foo: 'bar' })
    }, /expected/i)
  })

  it('should return the last element in the array:', () => {
    assert.strictEqual(last(['a', 'b', 'c', 'd', 'e', 'f']), 'f')
    assert.strictEqual(last(['a', 'b', 'c', 'd', 'e', 'f'], 1), 'f')
  })

  it('should the last n elements of the array:', () => {
    assert.deepEqual(last(['a', 'b', 'c', 'd', 'e', 'f'], 3), ['d', 'e', 'f'])
  })

  it('should return null if the array has no elements', () => {
    assert.strictEqual(last([]), null)
    assert.strictEqual(last([], 3), null)
  })
})
