"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fileName = "./account.json";
function createAccount(newClient) {
    const data = newClient;
    try {
        fs_1.appendFileSync(fileName, JSON.stringify(data));
        console.log("Deu certo");
    }
    catch (error) {
        console.error(error);
    }
}
createAccount({
    nome: "leo",
    cpf: "11154541111",
    birthday: new Date('2010-03-02')
});
//# sourceMappingURL=index.js.map