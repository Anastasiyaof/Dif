
/* let sum = (a,b) => a+b;

Function.prototype.bind2 = function(context,...args) {
  return  (...args2) => {
    return this.apply(context,args.concat(args2))}
}

let plusTen = sum.bind2(undefined,10);
console.log(plusTen(1));
console.log(plusTen(20)); */

//mix9

/* function f(a, b) {
  console.log(a + b);
  return a + b
}

Function.prototype.defer = function (ms) {
  return (...args) => {
    return setTimeout(() => {
      this.apply(undefined,args)
    }, ms)

  }
} */


//f.defer(2000)(2, 7)

