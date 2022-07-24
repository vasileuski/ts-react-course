Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

let numbersArr = [3, 5, 2, 1, 6, 8, 9];

Array.prototype.customReduce = function (callback, initValue) {
  let acc = arguments.length >= 2 ? initValue : this[0];
  let iStart = arguments.length >= 2 ? 0 : 1;
  for (let i = iStart; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

let newArr = numbersArr.customReduce((value) => value + 10);

console.log(newArr);
