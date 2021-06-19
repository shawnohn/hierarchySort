module.exports = function sortCategoriesForInsert (inputJson) {

    // Declare Hash Table { Key: parent_id, value: [children] }
    var hashTable = [];

    // To use Hash Table properly, replace null of parent_id to 0
    var arr = inputJson.map((item) => {   
        item.parent_id = item.parent_id === null ? 0 : item.parent_id;
        return item;
    });
    
    // Implement Hash Table
    for (var i = 0; i < arr.length; i++) {
        if (hashTable[arr[i].parent_id] == undefined) {
            hashTable[arr[i].parent_id] = [];
        }
        hashTable[arr[i].parent_id].push(arr[i]);
    }

    // Sort Hash Table
    var properJsonOutput = hierarhySort(hashTable, 0, []);

    // Rollback 0 to null
    properJsonOutput.map((item) => {   
        item.parent_id = item.parent_id === 0 ? null : item.parent_id;
    });

    return properJsonOutput;
}

// Recursive function to sort by parent and child
function hierarhySort(hashTable, key, result) {     
    if (hashTable[key] == undefined) return;

    var arr = hashTable[key];
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i]);
      hierarhySort(hashTable, arr[i].id, result);
    }
    return result;
}
