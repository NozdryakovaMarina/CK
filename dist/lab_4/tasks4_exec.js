"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks4_js_1 = require("../lab_4/tasks4.js");
var CarI = tasks4_js_1.Transport.CarI;
var MotorbikeI = tasks4_js_1.Transport.MotorbikeI;
var TypeDocument = tasks4_js_1.Transport.TypeDocument;
var BodyType = tasks4_js_1.Transport.BodyType;
var ClassCar = tasks4_js_1.Transport.ClassCar;
var OwnerI = tasks4_js_1.Transport.OwnerI;
var VehicleStorageI = tasks4_js_1.Transport.VehicleStorageI;
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
