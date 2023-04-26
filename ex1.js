function add(num1, num2) {
  num1 = num1.toString().split("").reverse();
  num2 = num2.toString().split("").reverse();
  let numMax = Math.max(num1.length, num2.length);
  let newArr = [];
  for (let i = numMax - 1; i >= 0; i--) {
    newArr.push(Number(num1[i] || 0) + Number(num2[i] || 0));
  }
  let result = newArr.reduce(
    (acc, element) => acc.toString() + element.toString()
  );
  return Number(result);
}
