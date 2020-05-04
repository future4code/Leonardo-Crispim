"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const Bank_1 = require("./Bank");
exports.operation = process.argv[4];
exports.name = process.argv[5];
exports.cpf = process.argv[6];
exports.date = process.argv[7];
const bankFile = require("path").resolve(__dirname, "../bank.json");
exports.fileManager = new JSONFileManager_1.JSONFileManager(bankFile);
exports.accountsJSON = exports.fileManager.getObjectFromFIle();
const bank = new Bank_1.Bank();
switch (exports.operation) {
    case 'createAccount':
        bank.createAccount();
        break;
}
//# sourceMappingURL=index.js.map