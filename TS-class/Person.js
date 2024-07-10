var greet = function (person) {
    return "Hello, ".concat(person.name, " and you are ").concat(person.age, " years old");
};
console.log(greet({ name: "John", age: 30 }));
