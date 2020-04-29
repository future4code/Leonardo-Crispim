"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = {
    name: "clientname",
    registrationNumber: 15,
    consumedEnergy: 10,
    calculateBill() {
        return 3;
    }
};
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
class Residence extends Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
    }
}
exports.Residence = Residence;
class Commerce extends Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
}
exports.Commerce = Commerce;
class Industry extends Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
}
exports.Industry = Industry;
const residence = new Residence(3, "123");
const commerce = new Commerce(2, "321");
const industry = new Industry(1, "213");
class ResidentialClient extends Residence {
    constructor(name, registrationNumber, consumedEnergy, residentsQuantity, cep, cpf) {
        super(residentsQuantity, cep);
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cpf = cpf;
    }
    getCPF() {
        return this.cpf;
    }
    calculateBill() {
        return (this.consumedEnergy * 0.75);
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=index.js.map