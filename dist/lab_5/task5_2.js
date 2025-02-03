function createCounter(value) {
    let count = value;
    return function () {
        count++;
        console.log(`Current count: ${count}`);
        return count;
    };
}
const counter1 = createCounter(0);
const counter2 = createCounter(100);
counter1();
counter1();
counter2();
counter1();
counter2();
const value1 = counter1();
const value2 = counter2();
console.log(value1);
console.log(value2);
