"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const customer_1 = require("./customer");
const employee_1 = require("./employee");
const seller_1 = require("./seller");
exports.id = "12354687";
exports.email = "emailteste@gmail.com";
exports.name = "usuarioteste";
exports.password = "senhateste";
const user = new user_1.User("12354687", "emailteste@gmail.com", "usuarioteste", "senhateste");
const customer = new customer_1.Customer("123456", "customeremail@gmail.com", "customername", "customerpassword", "123-7");
const employee = new employee_1.Employee("1234", "employeemail@gmail.com", "employeename", "employeepasword", "14/01/2018", 2000);
const seller = new seller_1.Seller("9999", "selleremail", "sellername", "sellerpassword", "21/01/2010", 3000);
console.log(seller.setSalesQuantity(10));
//# sourceMappingURL=index.js.map