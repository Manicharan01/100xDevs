function isPalindrome(word){
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"?\[\]\\'\s+]/g, '').toLowerCase();

    let splitString = word.split("");

    let reverseArray = splitString.reverse();

    let check = reverseArray.join("");

    if(word == check)
        return true;
    else
        return false;
}

module.exports = isPalindrome;
