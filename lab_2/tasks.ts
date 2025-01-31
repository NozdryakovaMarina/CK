let a: number[] = [5.2, 1.1, 8.7, 2.9, 0.5];

function minElement(a: number[]): number {
    let min = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    return min;
}

const result: number = minElement(a);
console.log(result);

let matrix: number[][] = [
    [0, 2, 3],
    [4, 0, 6],
    [7, 8, 0]
];

function zeroElements(matrix: number[][]): number {
    let count: number = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++){
            if(matrix[i][j] === 0) {
                count++;
            }
        }
    }
    return count;
}

const result1: number = zeroElements(matrix);
console.log(result1);

const tuple: [string, string, string] = ['JavaScript', 'TypeScript', 'Tuple'];

const concatenate = (tuple: [string, string, string]) => {
    return tuple[0] + ' ' + tuple[1] + ' ' + tuple[2];
}

const result2: string = concatenate(tuple);
console.log(result2);

enum PrinterEnum {
    PRINTER_1 = 'matrix',
    PRINTER_2 = 'inkjet',
    PRINTER_3 = 'laser',
    PRINTER_4 = '3D',
}

console.log(PrinterEnum.PRINTER_2);

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}
    
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
}
    
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
}

function petInfo<T extends Pet>(pet: T): void {
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


type Printer = {
    model: string;
    manufacturer: string;
    type: PrinterEnum; 
    printSpeedPPM: number;
    isColor: boolean;
    supportMediaTypes: string[]
  };

  const myPrinter: Printer = {
    model: "HL-1110",
    manufacturer: "Brother",
    type: PrinterEnum.PRINTER_3, 
    printSpeedPPM: 20,
    isColor: false,
    supportMediaTypes: ["Letter", "A4", "Legal"]
  };

const printerJson = JSON.stringify(myPrinter, null, 2);
console.log("Объект принтера в формате JSON:\n", printerJson);


