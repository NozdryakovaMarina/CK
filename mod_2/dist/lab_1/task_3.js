/*
 * Выполните создание объектов – констант (const) и переменных (let) с
 * указанием различных встроенных и специальных типов. Название
 * переменной может быть любым. Количество объектов не более 8.
 */
//Константы
const age = 20;
console.log("Age:", age, typeof age);
const str = "Hello, World!";
console.log("String:", str, typeof str);
const arr = [6, 3, 1, 2];
console.log("Array:", arr, typeof arr);
const bool = true;
console.log("Boolean:", bool, typeof bool);
//Переменные
let date = {
    day: "31",
    month: "January",
    year: 2025
};
console.log("Date:", date, typeof date);
let symbol = Symbol('mySymbol');
console.log("UniqueSymbol:", symbol, typeof symbol);
let something;
console.log("Something:", something, typeof something);
let empty = null;
console.log("Empty value:", empty, typeof empty);
