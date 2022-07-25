let numbersArr = [3, 5, 2, 1, 6, 8, 9];

// Array.map
Array.prototype.customMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

// Array.reduce
Array.prototype.customReduce = function (callback, initValue) {
  // let acc = arguments.length >= 2 ? initValue : this[0];
  let acc = initValue >= 2 ? initValue : this[0];
  let iStart = arguments.length >= 2 ? 0 : 1;
  for (let i = iStart; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

const reduceExample = numbersArr.customReduce((value) => value + 10);
console.log(reduceExample);

// Array.filter
Array.prototype.customFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let filterExample = numbersArr.customFilter((el) => el > 5);

// Array.forEach
Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
