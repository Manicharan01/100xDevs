enum Arithematic {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
}

const calculate = (a: number, b: number, operation: Arithematic): number => {
  switch (operation) {
    case Arithematic.ADD:
      return a + b;
    case Arithematic.SUBTRACT:
      return a - b;
    case Arithematic.MULTIPLY:
      return a * b;
    case Arithematic.DIVIDE:
      return a / b;
  }
};

console.log(calculate(10, 100, Arithematic.ADD));
