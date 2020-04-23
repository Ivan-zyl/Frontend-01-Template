/**
 * @param {string} char
 * @return {string}
 */
function charToUtf8(char) {
  return '\\u' + char.codePointAt().toString(16);
}

/**
 * @param {string} str
 * @return {Array}
 */
function utf8Encoding(str) {
  return Array.from(str).map(charToUtf8);
}

