const isNumber = require('is-number-g')
const isArray = Array.isArray

const last = (arr, n) => {
  if (!isArray(arr)) {
    throw new Error('expected the first argument to be an array')
  }

  let len = arr.length
  if (len === 0) {
    return null
  }
  n = isNumber(n) ? +n : 1
  if (n === 1) {
    return arr[len - 1]
  }

  let res = new Array(n)
  while (n--) {
    res[n] = arr[--len]
  }
  return res
}

module.exports = last
