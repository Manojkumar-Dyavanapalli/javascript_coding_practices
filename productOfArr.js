let arr = [1, 2, 3];

let product = 1;
for (let i = 0; i < arr.length; i++) {
  product = product * arr[i];
}
console.log(`${arr.join(" * ")} = ${product}`);
