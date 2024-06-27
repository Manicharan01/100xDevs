class Calculator {
    result; 

    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }
    subtract(num) {
        this.result -= num;
    }
    multiply(num) {
        this.result *= num;
    }
    divide(num) {
        if(num === 0){
            throw new Error("Cannot divide by zero");
        }
        this.result /= num;
    }
    clear() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }

    calculate(valuePassed) {
        let after = valuePassed.replace(/\s+/g, '');
        if (!/^[0-9.+\-*/()]+$/.test(after)) {
            throw new Error("Invalid characters in expression");
        }

        try {
            // Evaluate the cleaned expression using the Function constructor
            // The 'Function' constructor is used to create a new function that evaluates the expression
            const evalResult = new Function(`return ${after}`)();
            
            if (typeof evalResult !== 'number' || !isFinite(evalResult)) {
                throw new Error("Invalid arithmetic operation");
            }

            after = eval(after);
        }

        catch (error) {
            throw new Error("Invalid arithmetic expression");
        }
        this.result = after;
    }
}

module.exports = Calculator;
