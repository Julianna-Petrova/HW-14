'use strict'

function apply(fn, ctx, args = []) {
  return fn.call(ctx, ...args);
}

function bind(fn, ctx) {
  return (args = []) => fn.call(ctx, ...args);
}

function f() {
  console.log(this);
}
apply(f, {}, [1, 2, 3]);

const bindedF = bind(f, {});
bindedF();
