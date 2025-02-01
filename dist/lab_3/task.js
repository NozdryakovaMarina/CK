var TypeDocument;
(function (TypeDocument) {
    TypeDocument["Passport"] = "Passport";
    TypeDocument["DrivingLicense"] = "Driving License";
    TypeDocument["IdCard"] = "ID Card";
})(TypeDocument || (TypeDocument = {}));
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
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "Sedan";
    BodyType["Hatchback"] = "Hatchback";
    BodyType["SUV"] = "SUV";
    BodyType["Truck"] = "Truck";
    BodyType["Coupe"] = "Coupe";
})(BodyType || (BodyType = {}));
var ClassCar;
(function (ClassCar) {
    ClassCar["A"] = "A";
    ClassCar["B"] = "B";
    ClassCar["C"] = "C";
    ClassCar["D"] = "D";
    ClassCar["E"] = "E";
    ClassCar["F"] = "F";
    ClassCar["S"] = "S";
})(ClassCar || (ClassCar = {}));
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
const owner1 = new OwnerI("Иванов", "Иван", "Иванович", new Date("1990-05-15"), TypeDocument.Passport, "1234", "567890");
const owner2 = new OwnerI("Петров", "Петр", "Петрович", new Date("1985-10-20"), TypeDocument.DrivingLicense, "7777", "123456");
const owner3 = new OwnerI("Александров", "Александр", "Александрович", new Date("2000-05-11"), TypeDocument.IdCard, "6312", "100503");
const car1 = new CarI("Toyota", "Camry", 2020, "VIN12345", "А123ВГ77", owner1, BodyType.Sedan, ClassCar.D);
const car2 = new CarI("Lada", "Granta", 2023, "VIN11223", "С789ЖЗ77", owner3, BodyType.Sedan, ClassCar.B);
const car3 = new CarI("BMW", "X5", 2022, "VIN67890", "В456ДЕ77", owner2, BodyType.SUV, ClassCar.E);
const motorbike1 = new MotorbikeI("Honda", "CBR600RR", 2022, "VIN67890", "М987КЛ77", owner1, "Steel", true);
const motorbike2 = new MotorbikeI("Kawasaki", "Ninja ZX-10R", 2023, "VIN44556", "Н123КМ77", owner2, "Aluminum", true);
const motorbike3 = new MotorbikeI("Harley-Davidson", "Street Glide", 2021, "VIN77889", "Р456ТУ77", owner3, "Steel", false);
const carStorage = new VehicleStorageI(new Date());
carStorage.save(car1);
carStorage.save(car2);
carStorage.save(car3);
const motorbikeStorage = new VehicleStorageI(new Date());
motorbikeStorage.save(motorbike1);
motorbikeStorage.save(motorbike2);
motorbikeStorage.save(motorbike3);
const vehicleStorage = new VehicleStorageI(new Date());
vehicleStorage.addVehicle(car1);
vehicleStorage.addVehicle(motorbike1);
vehicleStorage.addVehicle(car2);
vehicleStorage.addVehicle(car3);
vehicleStorage.addVehicle(motorbike2);
vehicleStorage.addVehicle(motorbike3);
console.log(carStorage.getAllVehicles());
console.log(motorbikeStorage.getAllVehicles());
console.log(vehicleStorage.getAllVehicles());
