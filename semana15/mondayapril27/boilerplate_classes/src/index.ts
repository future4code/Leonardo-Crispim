import { JSONFileManager } from "./JSONFileManager";
import { UserAccount } from "./UserAccount";
import { Bank } from "./Bank";

export const operation: string = process.argv[4]
export const name: string = process.argv[5]
export const cpf: string = process.argv[6]
export const date: string = process.argv[7]

const bankFile = require("path").resolve(__dirname, "../bank.json")
// Essa linha serve para conseguir utilizar o bankFile em qualquer criando uma variavel e armazenando
// o arquivo indicado no caminho

export const fileManager: JSONFileManager = new JSONFileManager(bankFile)
export const accountsJSON = fileManager.getObjectFromFIle() as UserAccount[]

const bank = new Bank()

switch (operation) {
    case 'createAccount':
        bank.createAccount()
        break;
}