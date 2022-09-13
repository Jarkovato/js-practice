// const partial = (f, n) => f.bind(null, n); bad
// const partial = (fn, x) => (...args) => fn(x, ...args); bad
const partial = (fn, ...args) => (...rest) => fn(...args, ...rest); // solution

const sum = (a, b, c, d) => a + b + c + d;

const x1 = partial(sum, 1); // f(1)
const x2 = partial(x1, 2); // f(1, 2)
const x3 = partial(x2, 3); // f(1, 2, 3)
const part1 = x3(4); 

console.log(part1) // 10;

const f1 = partial(sum, 1, 2);
const f2 = partial(f1, 3);
const part2 = f2(4);

console.log(part2); // 10;