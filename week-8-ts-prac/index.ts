const swap = <T>(arr: T[]) => {
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
};

console.log(swap(["ONE", true, "c"])); // a
console.log(swap([1, "2", "3"])); // 1
