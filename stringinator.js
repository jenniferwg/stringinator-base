const _ = require('./underbar');

const first = function(str, n) {
  const result = _.first(str.split(''), n);
  return result.length <= 1 ?  result : result.join('');
};

const last = function(str, n) {
  const result = _.last(str.split(''), n);
  return result.length <= 1 ?  result : result.join('');
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), current => current === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split(''), current => current === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), current => current >= 0 && current <= 9);
};

const filterToOnlyDigits = function(str) {
  return _.filter(str.split(''), current => current !== ' ' && current >= 0 && current <= 9).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, current => truncateString(current, maxLength));
};

const countChars = function(str) {
  const result = {};
  _.each(str.split(''), current => result[current] ? result[current]++ : result[current] = 1);
  return result;
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};