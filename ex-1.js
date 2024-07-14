function twoSum(numbers, target) {
  for (let n = 0; n < numbers.length; n++) {
    for (let j = n + 1; j < numbers.length; j++) {
      if (numbers[n] + numbers[j] === target) {
        return [n, j];
      }
    }
  }
  return [];
}

numbers = [2, 7, 11, 15];

console.log(twoSum(numbers, 24));

// numbers = [2, 7, 11, 15, 25, 30, 35];

// console.log(twoSum(numbers, 55));
