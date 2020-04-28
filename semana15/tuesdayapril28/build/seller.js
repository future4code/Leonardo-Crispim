"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Seller extends employee_1.Employee {
    constructor(id, email, name, password, admissionDate, baseSalary, salesQuantity = 0) {
        super(id, email, name, password, admissionDate, baseSalary);
        this.salesQuantity = 0;
        console.log("Chamando o construtor da classe User");
        this.salesQuantity = salesQuantity;
    }
    setSalesQuantity(sales) {
        this.salesQuantity = sales;
    }
}
exports.Seller = Seller;
//# sourceMappingURL=seller.js.map