function findShort(s) {
  let arr = s.split(" ");
  let arr1 = [];
  arr.forEach((item) => {
    item = item.length;
    arr1.push(item);
  });

  arr1.sort((a, b) => a - b);
  console.log(arr1);
  return arr1[0];
}
