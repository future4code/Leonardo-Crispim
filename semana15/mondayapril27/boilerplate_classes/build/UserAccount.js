"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class UserAccount {
    constructor(name, cpf, birth, balance = 0, transactions = []) {
        this.cpf = cpf;
        this.name = name;
        const today = moment();
        const birthday = moment(birth, "DD/MM/YYYY");
        const finalAge = today.diff(birthday, "years");
        this.age = finalAge;
        this.balance = balance;
        this.transactions = transactions;
    }
    getBalance() {
        return this.balance;
    }
    addBalance(addSaldo) {
        this.balance += addSaldo;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map