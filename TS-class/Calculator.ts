const calc = (
  a: number,
  b: number,
  type: "sum" | "sub" | "mul" | "div",
): number => {
  if (type === "sum") {
    return a + b;
  } else if (type === "sub") {
    return a - b;
  } else if (type === "mul") {
    return a * b;
  } else if (type === "div") {
    if (b == 0) {
      return 0;
    } else {
      return a / b;
    }
  } else {
    return 0;
  }
};

console.log(calc(10, 100, "sub"));
