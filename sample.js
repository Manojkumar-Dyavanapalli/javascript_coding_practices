let arr = [12, [1, 2], [3, 4], [5, 6]];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "object") {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = arr[i][j] * arr[i][j];
    }
    // console.log("arr");
  } else {
    arr[i] = arr[i] * arr[i];
    // console.log("int");
  }
}
console.log(arr);
