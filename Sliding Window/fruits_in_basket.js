function fruits_in_basket(arrayt) {
  let uniqueFruits = {};

  let windowStart = 0;
  let maxLength = 0;

  for (windowEnd = 0; windowEnd < arrayt.length; windowEnd++) {
    if (!(arrayt[windowEnd] in uniqueFruits)) {
      uniqueFruits[arrayt[windowEnd]] = 0;
    }
    uniqueFruits[arrayt[windowEnd]] = uniqueFruits[arrayt[windowEnd]] + 1;

    while (Object.keys(uniqueFruits).length > 2) {
      uniqueFruits[arrayt[windowStart]]--;

      if (uniqueFruits[arrayt[windowStart]] == 0) {
        delete uniqueFruits[arrayt[windowStart]];
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(fruits_in_basket(["A", "B", "C", "B", "B", "C"]));
