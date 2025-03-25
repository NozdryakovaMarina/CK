declare let a: number[];
declare function minElement(a: number[]): number;
declare const result: number;
declare let matrix: number[][];
declare function zeroElements(matrix: number[][]): number;
declare const result1: number;
declare const tuple: [string, string, string];
declare const concatenate: (tuple: [string, string, string]) => string;
declare const result2: string;
declare enum PrinterEnum {
    PRINTER_1 = "matrix",
    PRINTER_2 = "inkjet",
    PRINTER_3 = "laser",
    PRINTER_4 = "3D"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function petInfo<T extends Pet>(pet: T): void;
declare const dog: Dog;
declare const result3: void;
declare const cat: Cat;
declare const result4: void;
type Printer = {
    model: string;
    manufacturer: string;
    type: PrinterEnum;
    printSpeedPPM: number;
    isColor: boolean;
    supportMediaTypes: string[];
};
declare const myPrinter: Printer;
declare const printerJson: string;
