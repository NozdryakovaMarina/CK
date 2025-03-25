export namespace Transport {
    export enum TypeDocument {
        Passport = "Passport",
        DrivingLicense = "Driving License",
        IdCard = "ID Card"
    }
    
    export interface Owner {
        surname: string;
        name: string;
        patronymic: string;
        birthDate: Date;
        documentType: TypeDocument;
        seriesDocument: string;
        numberDocument: string;
        printOwnerInfo:() => string;
    }
    
    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        printVehicleInfo:() => string;
    } 
    
    export class OwnerI implements Owner {
        private _surname: string;
        private _name: string;
        private _patronymic: string;
        private _birthDate: Date;
        private _documentType: TypeDocument;
        private _seriesDocument: string;
        private _numberDocument: string;
    
        constructor(surname: string, name: string, patronymic: string, birthDate: Date, documentType: TypeDocument, seriesdocument: string, numberDocument: string) {
            this._surname = surname;
            this._name = name;
            this._patronymic = patronymic;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this.seriesDocument = seriesdocument;
            this._numberDocument = numberDocument;
        }
    
        get surname(): string {
            return this._surname;
        }
    
        set surname(value: string) {
            this._surname = value;
        } 
    
        get name(): string {
            return this._name;
        }
    
        set name(value: string) {
            this._name = value;
        }
    
        get patronymic(): string {
            return this._patronymic;
        }
    
        set patronymic(value: string) {
            this._patronymic = value;
        }
    
        get birthDate(): Date {
            return this._birthDate;
        }
    
        set birthDate(value: Date) {
            this._birthDate = value;
        }
    
        get documentType(): TypeDocument {
            return this._documentType;
        }
    
        set documentType(value: TypeDocument) {
            this._documentType = value;
        }
    
        get seriesDocument(): string {
            return this._seriesDocument;
        }
    
        set seriesDocument(value: string) {
            this._seriesDocument = value;
        }
    
        get numberDocument(): string {
            return this._numberDocument;
        }
    
        set numberDocument(value: string) {
            this._numberDocument = value;
        }
    
        printOwnerInfo(): string {
            return 'Surname:' + this._surname + '\nName:' + this._name + '\nPatronymic:' + this._patronymic + '\nBirth date:' + this._birthDate + '\nDocument type:' + this._documentType + '\nSeries document:' + this._seriesDocument + '\nNumber document:' + this._numberDocument;
        }
    }
    
    export class VehicleI implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;
    
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
    
        get brand(): string {
            return this._brand;
        }
    
        set brand(value: string) {
            this._brand = value;
        }
    
        get model(): string {
            return this._model;
        }
    
        set model(value: string) {
            this._model = value;
        }
    
        get year(): number {
            return this._year;
        }
    
        set year(value: number) {
            this._year = value;
        }
    
        get vin(): string {
            return this._vin;
        }
    
        set vin(value: string) {
            this._vin = value;
        }
    
        get registrationNumber(): string {
            return this._registrationNumber;
        }
    
        set registrationNumber(value: string) {
            this._registrationNumber = value;
        }
    
        get owner(): Owner {
            return this._owner;
        }
    
        set owner(value: Owner) {
            this._owner = value;
        }
    
        printVehicleInfo(): string {
            return 'Brand:' + this._brand + '\nModel:' + this._model + '\nYear:' + this._year + '\nVin-number:' + this._vin + '\nRegistration number:' + this._registrationNumber;
        }
    }
    
    export enum BodyType {
        Sedan = "Sedan",
        Hatchback = "Hatchback",
        SUV = "SUV",
        Truck = "Truck",
        Coupe = "Coupe"
    }
    
    export enum ClassCar {
        A = "A",
        B = "B",
        C = "C",
        D = "D",
        E = "E",
        F = "F",
        S = "S"
    }
    
    export interface Car extends Vehicle {
        bodyType: BodyType;
        classCar: ClassCar;
        printCar: () => string
    }
    
    export class CarI extends VehicleI implements Car {
        private _bodyType: BodyType;
        private _classCar: ClassCar;
    
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: ClassCar) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._classCar = carClass;
        }
    
        get bodyType(): BodyType {
            return this._bodyType;
        }
    
        set bodyType(value: BodyType) {
            this._bodyType = value;
        }
    
        get classCar(): ClassCar {
            return this._classCar;
        }
    
        set classCar(value: ClassCar) {
            this._classCar = value;
        }
    
        printCar(): string {
            return 'Type body:' + this._bodyType + '\nClass car:' + this._classCar;
        }
    }
    
    export interface Motorbike extends Vehicle {
        frameType: string;
        isSport: boolean;
        printMotorbike(): void;
    }
    
    export class MotorbikeI extends VehicleI implements Motorbike {
        private _frameType: string;
        private _isSport: boolean;
    
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isSport: boolean) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._frameType = frameType;
            this._isSport = isSport;
        }
    
        get frameType(): string {
           return this._frameType;
        }
    
        set frameType(value: string) {
          this._frameType = value;
        }
        get isSport(): boolean {
            return this._isSport;
        }
        set isSport(value: boolean) {
            this._isSport = value
        }
    
         printMotorbike(): string {
            return 'Frame type:' + this._frameType + '\nIs sport:' + this._isSport;
        }
    }
    
    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
        save(vehicles: T): void;
    }
    
    export class VehicleStorageI<T extends Vehicle> implements VehicleStorage<T> {
        private _creationDate: Date;
        private _vehicles: T[];
    
        constructor(creationDate: Date) {
          this._creationDate = creationDate;
          this._vehicles = [];
        }
    
        get creationDate(): Date {
            return this._creationDate;
        }
    
        set creationDate(value: Date) {
           this._creationDate = value;
        }
    
        get vehicles(): T[] {
           return this._vehicles
        }
    
        addVehicle(vehicle: T): void {
          this._vehicles.push(vehicle);
        }
    
        getAllVehicles(): T[] {
          return this._vehicles;
        }
    
        save(vehicles: T): void {
            this._vehicles.push(vehicles);
        }
    }
}