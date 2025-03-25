/*
 * Выполните создание объектов – констант (const) и переменных (let) с
 * указанием различных встроенных и специальных типов. Название
 * переменной может быть любым. Количество объектов не более 8.
 */
//Константы
const age: number = 20;
console.log("Age:", age, typeof age);

const str: string = "Hello, World!";
console.log("String:", str, typeof str);

const arr: number[] = [6, 3, 1, 2];
console.log("Array:", arr, typeof arr);

const bool: boolean = true;
console.log("Boolean:", bool, typeof bool);

//Переменные
let date: object = {
    day: "31",
    month: "January",
    year: 2025
  };
console.log("Date:", date, typeof date);

let symbol: symbol = Symbol('mySymbol');
console.log("UniqueSymbol:", symbol, typeof symbol);

let something: undefined;
console.log("Something:", something, typeof something);

let empty: null = null;
console.log("Empty value:", empty, typeof empty);