const palindromes = function (string) {
    string.trim();
    const reverse = string.split("").reverse();

    for (let char of reverse) {
        if (["?", "!", ".", ","].includes(char)) {
            let index = reverse.indexOf(char);
            (index === -1) ? reverse.pop(char): 
            reverse.splice(index, 1);
        };
    };
    return reverse.join("") === string;
};

// Do not edit below this line
module.exports = palindromes;
