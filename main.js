'use strict'

function apply(fn, ctx, args = []) {
  return fn.call(ctx, ...args);
}

function bind(fn, ctx) {
  return (args = []) => fn.call(ctx, ...args);
}


// Написать свои функции apply, bind.

// Внутри использовать только встроенную функцию call.

// Пример использования


function f() {
  console.log(this);
}
apply(f, {}, [1, 2, 3]);

// Первый параметр это функция, которую необходимо вызовать, 2й - контекст, 3й это массив аргументов, с которым функция будет вызвана.

const bindedF = bind(f, {});
bindedF();
