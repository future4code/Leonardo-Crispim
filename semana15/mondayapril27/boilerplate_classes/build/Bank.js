"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const UserAccount_1 = require("./UserAccount");
class Bank {
    createAccount() {
        if (index_1.name === undefined || index_1.cpf === undefined || index_1.date === undefined) {
            console.log("Um ou mais dados nao foram preenchidos.");
            console.log("Nome: " + index_1.name);
            console.log("CPF: " + index_1.cpf);
            console.log("Data: " + index_1.date);
        }
        else {
            const result = index_1.accountsJSON.filter((account) => account.cpf === index_1.cpf);
            if (result.length > 0) {
                console.log("Ja existe uma conta com esse CPF.");
            }
            else {
                const newAccount = new UserAccount_1.UserAccount(index_1.name, index_1.cpf, index_1.date);
                if (newAccount.age < 18) {
                    console.log("Menor de idade nao pode filhao");
                }
                else {
                    try {
                        index_1.accountsJSON.push(newAccount);
                        index_1.fileManager.writeObjectToFile(index_1.accountsJSON);
                        console.log("Conta criada com sucesso!");
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
        }
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map