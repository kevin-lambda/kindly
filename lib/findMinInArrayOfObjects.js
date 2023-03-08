/**
 * @param {Array} array - array of objects
 * @param {String} key - keys to search max value
 * @returns {Object} object with min key value
 */
function findMinInArrayOfObjects(array, key) {
  return array.reduce((previous, current) =>
    previous[key] < current[key] ? previous : current
  )
}

module.exports = findMinInArrayOfObjects
