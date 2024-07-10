var Arithematic;
(function (Arithematic) {
    Arithematic[Arithematic["ADD"] = 0] = "ADD";
    Arithematic[Arithematic["SUBTRACT"] = 1] = "SUBTRACT";
    Arithematic[Arithematic["MULTIPLY"] = 2] = "MULTIPLY";
    Arithematic[Arithematic["DIVIDE"] = 3] = "DIVIDE";
})(Arithematic || (Arithematic = {}));
var calculate = function (a, b, operation) {
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
