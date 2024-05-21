function calculate(a, b, callback) {
  const ans = callback(a, b);
  return ans;
}


function callback(a, b) {
  return a + b;
}

const val = calculate(1, 2, callback);
console.log(val);