function isAnagram(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error(
      `At least one of the parameters is of an invalid type: Param1: ${str1}, Param2: ${str2}. Both params should be strings.`,
    );
  }
  str1 = str1.replace(/\s+/g).toLowerCase();
  str2 = str2.replace(/\s+/g).toLowerCase();

  n = str1.length;
  m = str2.length;

  //if the sizes of strings are not equal then they are not anagrans
  if (n !== m) {
    return false;
  }

  //Creating a map to check frequencies of the letters in Srtrings
  const charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //cheking if the frequencies of str2 matches with frequencies of str2, if they doesn't return false
  for (let char of str2) {
    if (charCount[char]) {
      charCount[char]--;
    } else {
      return false;
    }
  }

  for (let x in charCount) {
    if (charCount[x] !== 0) {
      return false;
    }
  }

  return true;
}
module.exports = isAnagram;
