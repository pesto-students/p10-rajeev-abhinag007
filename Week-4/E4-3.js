const fibonacci = {
    [Symbol.iterator]() {
      let a = 0, b = 1;
      return {
        next() {
          const value = a;
          a = b;
          b = value + b;
          return { value, done: false };
        }
      };
    }
  };
  
  for (const n of fibonacci) {
    if (n > 100) break;
    console.log(n);
  }
  