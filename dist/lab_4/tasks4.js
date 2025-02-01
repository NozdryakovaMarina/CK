"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let TypeDocument;
    (function (TypeDocument) {
        TypeDocument["Passport"] = "Passport";
        TypeDocument["DrivingLicense"] = "Driving License";
        TypeDocument["IdCard"] = "ID Card";
    })(TypeDocument = Transport.TypeDocument || (Transport.TypeDocument = {}));
    class OwnerI {
        constructor(surname, name, patronymic, birthDate, documentType, seriesdocument, numberDocument) {
            this._surname = surname;
            this._name = name;
            this._patronymic = patronymic;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this.seriesDocument = seriesdocument;
            this._numberDocument = numberDocument;
        }
        get surname() {
            return this._surname;
        }
        set surname(value) {
            this._surname = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get patronymic() {
            return this._patronymic;
        }
        set patronymic(value) {
            this._patronymic = value;
        }
        get birthDate() {
            return this._birthDate;
        }
        set birthDate(value) {
            this._birthDate = value;
        }
        get documentType() {
            return this._documentType;
        }
        set documentType(value) {
            this._documentType = value;
        }
        get seriesDocument() {
            return this._seriesDocument;
        }
        set seriesDocument(value) {
            this._seriesDocument = value;
        }
        get numberDocument() {
            return this._numberDocument;
        }
        set numberDocument(value) {
            this._numberDocument = value;
        }
        printOwnerInfo() {
            return 'Surname:' + this._surname + '\nName:' + this._name + '\nPatronymic:' + this._patronymic + '\nBirth date:' + this._birthDate + '\nDocument type:' + this._documentType + '\nSeries document:' + this._seriesDocument + '\nNumber document:' + this._numberDocument;
        }
    }
    Transport.OwnerI = OwnerI;
    class VehicleI {
        constructor(brand, model, year, vin, registrationNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        get brand() {
            return this._brand;
        }
        set brand(value) {
            this._brand = value;
        }
        get model() {
            return this._model;
        }
        set model(value) {
            this._model = value;
        }
        get year() {
            return this._year;
        }
        set year(value) {
            this._year = value;
        }
        get vin() {
            return this._vin;
        }
        set vin(value) {
            this._vin = value;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        set registrationNumber(value) {
            this._registrationNumber = value;
        }
        get owner() {
            return this._owner;
        }
        set owner(value) {
            this._owner = value;
        }
        printVehicleInfo() {
            return 'Brand:' + this._brand + '\nModel:' + this._model + '\nYear:' + this._year + '\nVin-number:' + this._vin + '\nRegistration number:' + this._registrationNumber;
        }
    }
    Transport.VehicleI = VehicleI;
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "Sedan";
        BodyType["Hatchback"] = "Hatchback";
        BodyType["SUV"] = "SUV";
        BodyType["Truck"] = "Truck";
        BodyType["Coupe"] = "Coupe";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let ClassCar;
    (function (ClassCar) {
        ClassCar["A"] = "A";
        ClassCar["B"] = "B";
        ClassCar["C"] = "C";
        ClassCar["D"] = "D";
        ClassCar["E"] = "E";
        ClassCar["F"] = "F";
        ClassCar["S"] = "S";
    })(ClassCar = Transport.ClassCar || (Transport.ClassCar = {}));
    class CarI extends VehicleI {
        constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._classCar = carClass;
        }
        get bodyType() {
            return this._bodyType;
        }
        set bodyType(value) {
            this._bodyType = value;
        }
        get classCar() {
            return this._classCar;
        }
        set classCar(value) {
            this._classCar = value;
        }
        printCar() {
            return 'Type body:' + this._bodyType + '\nClass car:' + this._classCar;
        }
    }
    Transport.CarI = CarI;
    class MotorbikeI extends VehicleI {
        constructor(brand, model, year, vin, registrationNumber, owner, frameType, isSport) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._frameType = frameType;
            this._isSport = isSport;
        }
        get frameType() {
            return this._frameType;
        }
        set frameType(value) {
            this._frameType = value;
        }
        get isSport() {
            return this._isSport;
        }
        set isSport(value) {
            this._isSport = value;
        }
        printMotorbike() {
            return 'Frame type:' + this._frameType + '\nIs sport:' + this._isSport;
        }
    }
    Transport.MotorbikeI = MotorbikeI;
    class VehicleStorageI {
        constructor(creationDate) {
            this._creationDate = creationDate;
            this._vehicles = [];
        }
        get creationDate() {
            return this._creationDate;
        }
        set creationDate(value) {
            this._creationDate = value;
        }
        get vehicles() {
            return this._vehicles;
        }
        addVehicle(vehicle) {
            this._vehicles.push(vehicle);
        }
        getAllVehicles() {
            return this._vehicles;
        }
        save(vehicles) {
            this._vehicles.push(vehicles);
        }
    }
    Transport.VehicleStorageI = VehicleStorageI;
})(Transport || (exports.Transport = Transport = {}));
