// task get sum for all array elements
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]], 1, 2, 3];

const getSum = (array) => {
  return array.reduce((acc, next) => {
    if (Array.isArray(next)) {
      acc += getSum(next);
    } else {
      acc += next;
    }
    return acc;
  }, 0)
}
