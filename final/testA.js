const doo = require("./A");

const api = {
  a: {
    b: {
      c: callback => setTimeout(() => callback(null, "hello"), 100)
    }
  },
  aa: {
    bb: (callback, x, y) => setTimeout(() => callback(null, x + y), 200)
  },
  c: callback => setTimeout(() => callback("Error"), 100),
  foo: {
    myConst: 1
  }
};

const promisedApi = doo(api);
console.log(promisedApi.foo.myConst); // 1
promisedApi.a.b.c().then(res => console.log(res)); // hello
promisedApi.aa.bb(1, 2).then(res => console.log(res)); // 3
promisedApi.c().catch(err => console.error(err)); // Error
