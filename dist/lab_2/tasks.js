/*
 * Задание 1.
 * 1) Реализовать метод, возвращающий минимальное
 *    число из массива вещественных чисел
 */
let a = [5.2, 1.1, 8.7, 2.9, 0.5];
function minElement(a) {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}
const result = minElement(a);
console.log(result);
/*
 * 2) Реализовать метод, возвращающий количество
 *    нулевых значений в матрице целых чисел
 */
let matrix = [
    [0, 2, 3],
    [4, 0, 6],
    [7, 8, 0]
];
function zeroElements(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 0) {
                count++;
            }
        }
    }
    return count;
}
const result1 = zeroElements(matrix);
console.log(result1);
/*
 * Задание 2.
 * Создайте кортеж, который может содержать только 3
 * строковых значения. Реализуйте метод, возвращающий
 * конкатенацию этих строковых значений.
 */
const tuple = ['JavaScript', 'TypeScript', 'Tuple'];
const concatenate = (tuple) => {
    return tuple[0] + ' ' + tuple[1] + ' ' + tuple[2];
};
const result2 = concatenate(tuple);
console.log(result2);
/*
 * Задание 3.
 * Создайте тип перечисление для типов принтеров
 * (струйный, лазерный и т.д.). Выведите какой-либо тип принтера в
 * консоль.
 */
var PrinterEnum;
(function (PrinterEnum) {
    PrinterEnum["PRINTER_1"] = "matrix";
    PrinterEnum["PRINTER_2"] = "inkjet";
    PrinterEnum["PRINTER_3"] = "laser";
    PrinterEnum["PRINTER_4"] = "3D";
})(PrinterEnum || (PrinterEnum = {}));
console.log(PrinterEnum.PRINTER_2);
/*
 * Задание 4.
 * Реализуйте метод, который будет выводить информацию в
 * консоль о создаваемом объекте типа Cat или Dog, применяя
 * обобщенный тип, ограниченный типом Pet.
 */
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function petInfo(pet) {
    console.log("Имя:", pet.name);
    console.log("Возраст:", pet.age);
    console.log("Звук:", pet.speak());
    if (pet instanceof Dog) {
        console.log("Заметка:", pet.label);
    }
}
const dog = new Dog();
const result3 = petInfo(dog);
console.log(result3);
const cat = new Cat();
const result4 = petInfo(cat);
console.log(result4);
const myPrinter = {
    model: "HL-1110",
    manufacturer: "Brother",
    type: PrinterEnum.PRINTER_3,
    printSpeedPPM: 20,
    isColor: false,
    supportMediaTypes: ["Letter", "A4", "Legal"]
};
const printerJson = JSON.stringify(myPrinter, null, 2);
console.log("Объект принтера в формате JSON:\n", printerJson);
