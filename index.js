const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(stringArray) {
  
  return stringArray.sort((bigWord, smallWord) => bigWord.length - smallWord.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let finalStringArray = [];
  
  for (let i = 0; i < word.length; i++) {
    finalStringArray.unshift(word.slice(word.length - i) + word.slice(0, word.length - i));
  }
  return finalStringArray;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {

  return isNaN(Math.max(...numbers) - Math.min(...numbers)) ? numbers : Math.max(...numbers) - Math.min(...numbers);
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {Number} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {

  return message.replace(" ", "").split("").map(mess => dictionary[mess.toUpperCase()] || "").join(" ");
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
