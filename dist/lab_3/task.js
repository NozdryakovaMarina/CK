var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TypeDocument;
(function (TypeDocument) {
    TypeDocument["Passport"] = "Passport";
    TypeDocument["DrivingLicense"] = "Driving License";
    TypeDocument["IdCard"] = "ID Card";
})(TypeDocument || (TypeDocument = {}));
var OwnerI = /** @class */ (function () {
    function OwnerI(surname, name, patronymic, birthDate, documentType, seriesdocument, numberDocument) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this.seriesDocument = seriesdocument;
        this._numberDocument = numberDocument;
    }
    Object.defineProperty(OwnerI.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerI.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerI.prototype, "patronymic", {
        get: function () {
            return this._patronymic;
        },
        set: function (value) {
            this._patronymic = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerI.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerI.prototype, "documentType", {
        get: function () {
            return this._documentType;
        },
        set: function (value) {
            this._documentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerI.prototype, "seriesDocument", {
        get: function () {
            return this._seriesDocument;
        },
        set: function (value) {
            this._seriesDocument = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerI.prototype, "numberDocument", {
        get: function () {
            return this._numberDocument;
        },
        set: function (value) {
            this._numberDocument = value;
        },
        enumerable: false,
        configurable: true
    });
    OwnerI.prototype.printOwnerInfo = function () {
        return 'Surname:' + this._surname + '\nName:' + this._name + '\nPatronymic:' + this._patronymic + '\nBirth date:' + this._birthDate + '\nDocument type:' + this._documentType + '\nSeries document:' + this._seriesDocument + '\nNumber document:' + this._numberDocument;
    };
    return OwnerI;
}());
var VehicleI = /** @class */ (function () {
    function VehicleI(brand, model, year, vin, registrationNumber, owner) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    Object.defineProperty(VehicleI.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (value) {
            this._brand = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleI.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleI.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleI.prototype, "vin", {
        get: function () {
            return this._vin;
        },
        set: function (value) {
            this._vin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleI.prototype, "registrationNumber", {
        get: function () {
            return this._registrationNumber;
        },
        set: function (value) {
            this._registrationNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleI.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    VehicleI.prototype.printVehicleInfo = function () {
        return 'Brand:' + this._brand + '\nModel:' + this._model + '\nYear:' + this._year + '\nVin-number:' + this._vin + '\nRegistration number:' + this._registrationNumber;
    };
    return VehicleI;
}());
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
function toUpperCase(target, propertyName, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
function sealed(constructor) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var CarI = /** @class */ (function (_super) {
    __extends(CarI, _super);
    function CarI(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
        _this._bodyType = bodyType;
        _this._classCar = carClass;
        return _this;
    }
    Object.defineProperty(CarI.prototype, "bodyType", {
        get: function () {
            return this._bodyType;
        },
        set: function (value) {
            this._bodyType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarI.prototype, "classCar", {
        get: function () {
            return this._classCar;
        },
        set: function (value) {
            this._classCar = value;
        },
        enumerable: false,
        configurable: true
    });
    CarI.prototype.startEngine = function () {
        console.log("Engine started");
    };
    CarI.prototype.printCar = function () {
        return 'Type body:' + this._bodyType + '\nClass car:' + this._classCar;
    };
    __decorate([
        toUpperCase
    ], CarI.prototype, "printCar", null);
    CarI = __decorate([
        sealed
    ], CarI);
    return CarI;
}(VehicleI));
var MotorbikeI = /** @class */ (function (_super) {
    __extends(MotorbikeI, _super);
    function MotorbikeI(brand, model, year, vin, registrationNumber, owner, frameType, isSport) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
        _this._frameType = frameType;
        _this._isSport = isSport;
        return _this;
    }
    Object.defineProperty(MotorbikeI.prototype, "frameType", {
        get: function () {
            return this._frameType;
        },
        set: function (value) {
            this._frameType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MotorbikeI.prototype, "isSport", {
        get: function () {
            return this._isSport;
        },
        set: function (value) {
            this._isSport = value;
        },
        enumerable: false,
        configurable: true
    });
    MotorbikeI.prototype.printMotorbike = function () {
        return 'Frame type:' + this._frameType + '\nIs sport:' + this._isSport;
    };
    return MotorbikeI;
}(VehicleI));
var VehicleStorageI = /** @class */ (function () {
    function VehicleStorageI(creationDate) {
        this._creationDate = creationDate;
        this._vehicles = [];
    }
    Object.defineProperty(VehicleStorageI.prototype, "creationDate", {
        get: function () {
            return this._creationDate;
        },
        set: function (value) {
            this._creationDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehicleStorageI.prototype, "vehicles", {
        get: function () {
            return this._vehicles;
        },
        enumerable: false,
        configurable: true
    });
    VehicleStorageI.prototype.addVehicle = function (vehicle) {
        this._vehicles.push(vehicle);
    };
    VehicleStorageI.prototype.getAllVehicles = function () {
        return this._vehicles;
    };
    VehicleStorageI.prototype.save = function (vehicles) {
        this._vehicles.push(vehicles);
    };
    return VehicleStorageI;
}());
var owner1 = new OwnerI("Иванов", "Иван", "Иванович", new Date("1990-05-15"), TypeDocument.Passport, "1234", "567890");
var owner2 = new OwnerI("Петров", "Петр", "Петрович", new Date("1985-10-20"), TypeDocument.DrivingLicense, "7777", "123456");
var owner3 = new OwnerI("Александров", "Александр", "Александрович", new Date("2000-05-11"), TypeDocument.IdCard, "6312", "100503");
var car1 = new CarI("Toyota", "Camry", 2020, "VIN12345", "А123ВГ77", owner1, BodyType.Sedan, ClassCar.D);
var car2 = new CarI("Lada", "Granta", 2023, "VIN11223", "С789ЖЗ77", owner3, BodyType.Sedan, ClassCar.B);
var car3 = new CarI("BMW", "X5", 2022, "VIN67890", "В456ДЕ77", owner2, BodyType.SUV, ClassCar.E);
var motorbike1 = new MotorbikeI("Honda", "CBR600RR", 2022, "VIN67890", "М987КЛ77", owner1, "Steel", true);
var motorbike2 = new MotorbikeI("Kawasaki", "Ninja ZX-10R", 2023, "VIN44556", "Н123КМ77", owner2, "Aluminum", true);
var motorbike3 = new MotorbikeI("Harley-Davidson", "Street Glide", 2021, "VIN77889", "Р456ТУ77", owner3, "Steel", false);
var carStorage = new VehicleStorageI(new Date());
carStorage.save(car1);
carStorage.save(car2);
carStorage.save(car3);
var motorbikeStorage = new VehicleStorageI(new Date());
motorbikeStorage.save(motorbike1);
motorbikeStorage.save(motorbike2);
motorbikeStorage.save(motorbike3);
var vehicleStorage = new VehicleStorageI(new Date());
vehicleStorage.addVehicle(car1);
vehicleStorage.addVehicle(motorbike1);
vehicleStorage.addVehicle(car2);
vehicleStorage.addVehicle(car3);
vehicleStorage.addVehicle(motorbike2);
vehicleStorage.addVehicle(motorbike3);
console.log(carStorage.getAllVehicles());
console.log(motorbikeStorage.getAllVehicles());
console.log(vehicleStorage.getAllVehicles());
// Проверка работоспособности с декоратором
var car4 = new CarI("Toyota", "Camry", 2020, "VIN12345", "А123ВГ77", owner1, BodyType.Sedan, ClassCar.D);
console.log("car1 object before properties manipulations:", car4);
try {
    car4.brand = "Lada";
    console.log("car1.brand after changing:", car4.brand);
}
catch (e) {
    console.log("Error changing property of object:", e);
}
console.log("car1 object after properties manipulations:", car4);
console.log(car1.printCar());
