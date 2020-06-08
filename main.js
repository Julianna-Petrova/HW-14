'use strict'

function apply(fn, ctx, args = []) {
  return fn.call(ctx, ...args);
}

function bind(fn, ctx, ...bindArgs) {
  return (...args) => fn.call(ctx, ...bindArgs, ...args);
}

function f(...args) {
  console.log(this);
  console.log(args);
}
apply(f, {}, [1, 2, 3]);

const bindedF = bind(f, {}, 1, 2);
bindedF(3, 4, 7);
