import { readFile, writeFile, readFileSync, writeFileSync } from 'fs';

const operationType: string = process.argv[2];
const name: string = process.argv[3];
const cpf: string = process.argv[4];
const data: string = process.argv[5];

let accounts = JSON.parse(readFileSync('./contas.json').toString());

type userAccount = {
    user:{
        name: string,
        cpf: string,
        data: string,
    }
    saldo: number,
    extrato: any[],
}

if(operationType === 'createAccount'){
    if(!name || !cpf || !data) {
        console.log("Falta dados para criar a conta.")
    }
} else{
    let newAccount: userAccount = {
        user: {
            name,
            cpf,
            data,
        },
        saldo: 0,
        extrato: [0]
    }

    function createAccount(): void {
        try{
            accounts.push(newAccount);
            writeFileSync('./contas.json', JSON.stringify(accounts, null, 2))
        }catch(error){
            console.error(error)
        }
    }

}