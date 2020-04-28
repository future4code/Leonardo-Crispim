"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class Employee extends user_1.User {
    constructor(id, email, name, password, admissionDate, baseSalary) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe User");
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }
    getAdmissionDate() {
        return this.admissionDate;
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    calculateTotalSalary() {
        return (this.baseSalary + 400);
    }
}
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map