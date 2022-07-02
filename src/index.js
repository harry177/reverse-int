module.exports = function reverse (n) {
  n=Math.abs(n);  
  n=n.toString();
  let result="";
  for (let i=n.length-1; i>=0; i--)
  result += n[i];

  return +result;
}
