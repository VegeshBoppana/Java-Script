function square(a,b){
  return a*a;
}

function cube(a,b){
  return a*a*a;
}
function multiply(a,b){
  return a*b;
}

function operations(a,b,fn){
  const val1 =  fn(a,b);
  const val2 = fn(a,b);
  return val1 + val2;
}

console.log(operations(2,3,square))