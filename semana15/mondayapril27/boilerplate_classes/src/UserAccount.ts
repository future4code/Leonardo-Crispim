import { Transaction } from "./Transaction"
import * as moment from 'moment'

export class UserAccount {
    balance: number
    cpf: string
    name: string
    age: number
    transactions: Transaction[]

    constructor(name: string, cpf: string, birth: string, balance: number = 0, transactions: Transaction[] = []){
        this.cpf = cpf
        this.name = name
        const today: moment.Moment = moment()
        const birthday: moment.Moment = moment(birth, "DD/MM/YYYY")
        const finalAge: number = today.diff(birthday, "years")
        this.age = finalAge
        this.balance = balance
        this.transactions = transactions
    }

    public getBalance(): number{
        return this.balance
        // console.log(`Seu saldo atual e: $ ${this.balance}`)
    }

    public addBalance(addSaldo: number): void {
        this.balance += addSaldo
    }

}