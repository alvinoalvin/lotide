/* count num of each items in all items */
const countOnly = function(allItems, itemsToCount) {
  let countObj = {};

  for (let name in itemsToCount) {
    if (itemsToCount[name] === true && allItems.includes(name)) {
      countObj[name] = 0;
      for (let arrName of allItems) {
        if (name === arrName) {
          countObj[name] ++;
        }
      }
    }
  }
  
  return countObj;
};

module.exports = countOnly;