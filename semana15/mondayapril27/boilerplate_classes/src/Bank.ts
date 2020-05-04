import { name, cpf, date, accountsJSON, fileManager } from './index'
import { UserAccount } from './UserAccount'

export class Bank {
    public createAccount(): void{
        if(name === undefined || cpf === undefined || date === undefined){
            console.log("Um ou mais dados nao foram preenchidos.")
            console.log("Nome: " + name)
            console.log("CPF: " + cpf)
            console.log("Data: " + date)
        }
        else{
            const result = accountsJSON.filter((account: UserAccount) => account.cpf === cpf)
            if(result.length > 0){
                console.log("Ja existe uma conta com esse CPF.")
            }
            else{
                const newAccount = new UserAccount(name, cpf, date)
                if(newAccount.age < 18){
                    console.log("Menor de idade nao pode filhao")
                }
                else{
                    try{
                        accountsJSON.push(newAccount)
                        fileManager.writeObjectToFile(accountsJSON)
                        console.log("Conta criada com sucesso!")
                    }
                    catch(error){
                        console.error(error)
                    }
                }
            }
        }
    }
}