declare enum TypeDocument {
    Passport = "Passport",
    DrivingLicense = "Driving License",
    IdCard = "ID Card"
}
interface Owner {
    surname: string;
    name: string;
    patronymic: string;
    birthDate: Date;
    documentType: TypeDocument;
    seriesDocument: string;
    numberDocument: string;
    printOwnerInfo: () => string;
}
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo: () => string;
}
declare class OwnerI implements Owner {
    private _surname;
    private _name;
    private _patronymic;
    private _birthDate;
    private _documentType;
    private _seriesDocument;
    private _numberDocument;
    constructor(surname: string, name: string, patronymic: string, birthDate: Date, documentType: TypeDocument, seriesdocument: string, numberDocument: string);
    get surname(): string;
    set surname(value: string);
    get name(): string;
    set name(value: string);
    get patronymic(): string;
    set patronymic(value: string);
    get birthDate(): Date;
    set birthDate(value: Date);
    get documentType(): TypeDocument;
    set documentType(value: TypeDocument);
    get seriesDocument(): string;
    set seriesDocument(value: string);
    get numberDocument(): string;
    set numberDocument(value: string);
    printOwnerInfo(): string;
}
declare class VehicleI implements Vehicle {
    private _brand;
    private _model;
    private _year;
    private _vin;
    private _registrationNumber;
    private _owner;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
    get brand(): string;
    set brand(value: string);
    get model(): string;
    set model(value: string);
    get year(): number;
    set year(value: number);
    get vin(): string;
    set vin(value: string);
    get registrationNumber(): string;
    set registrationNumber(value: string);
    get owner(): Owner;
    set owner(value: Owner);
    printVehicleInfo(): string;
}
declare enum BodyType {
    Sedan = "Sedan",
    Hatchback = "Hatchback",
    SUV = "SUV",
    Truck = "Truck",
    Coupe = "Coupe"
}
declare enum ClassCar {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    S = "S"
}
interface Car extends Vehicle {
    bodyType: BodyType;
    classCar: ClassCar;
    printCar: () => string;
}
declare class CarI extends VehicleI implements Car {
    private _bodyType;
    private _classCar;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: ClassCar);
    get bodyType(): BodyType;
    set bodyType(value: BodyType);
    get classCar(): ClassCar;
    set classCar(value: ClassCar);
    printCar(): string;
}
interface Motorbike extends Vehicle {
    frameType: string;
    isSport: boolean;
    printMotorbike(): void;
}
declare class MotorbikeI extends VehicleI implements Motorbike {
    private _frameType;
    private _isSport;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isSport: boolean);
    get frameType(): string;
    set frameType(value: string);
    get isSport(): boolean;
    set isSport(value: boolean);
    printMotorbike(): string;
}
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
    save(vehicles: T): void;
}
declare class VehicleStorageI<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate;
    private _vehicles;
    constructor(creationDate: Date);
    get creationDate(): Date;
    set creationDate(value: Date);
    get vehicles(): T[];
    addVehicle(vehicle: T): void;
    getAllVehicles(): T[];
    save(vehicles: T): void;
}
declare const owner1: OwnerI;
declare const owner2: OwnerI;
declare const owner3: OwnerI;
declare const car1: Car;
declare const car2: Car;
declare const car3: CarI;
declare const motorbike1: MotorbikeI;
declare const motorbike2: MotorbikeI;
declare const motorbike3: MotorbikeI;
declare const carStorage: VehicleStorage<Car>;
declare const motorbikeStorage: VehicleStorage<Motorbike>;
declare const vehicleStorage: VehicleStorageI<Vehicle>;
