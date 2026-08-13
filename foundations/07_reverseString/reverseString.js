const reverseString = function(string) {
    let taille = string.length;
    let result = "";
    for (let i = taille - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
