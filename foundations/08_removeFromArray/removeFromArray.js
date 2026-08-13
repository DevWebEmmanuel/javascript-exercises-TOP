const removeFromArray = function(table, element) {
    let index = table.indexOf(element);
    (index != -1) ?table.splice(index, 1) : table.pop();
    return table;
};

// Do not edit below this line
module.exports = removeFromArray;
 