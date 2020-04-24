import { readFile, writeFile, writeFileSync, appendFileSync } from 'fs'

type client = {
  nome: string,
  cpf: string,
  birthday: Date
}

type transaction = {
  valor: number,
  data: string,
  descricao: string
}

const fileName= "./account.json"

function createAccount(newClient: client):void {
  const data: client = newClient;
try{
  appendFileSync(fileName,JSON.stringify(data))
  console.log("Deu certo")
}catch(error){
  console.error(error)
}
}
createAccount({
  nome: "leo",
  cpf: "11154541111",
  birthday: new Date('2010-03-02')
})

// const allAcounts = "./account.json", (resolve:any, reject: any) => {
//   try {
//     const treatedData = data.toString()
//     console.log(treatedData)
//   } catch (error) {
//     console.log("Aconteceu algo", reject)
//   }
// }

// const transaction: string = process.argv[2]
// const nome: string = process.argv[3]
// const cpf: string = process.argv[4]
// const data: string = process.argv[5]

// if (transaction === "newACount") {
//   if (!nome || !cpf || !data) {
//     console.log(" Necessário todos os campos preenchidos")
//   } else {

//     let account: client = {
//       nome,
//       cpf,
//       birthday:0
//     }
//   }
// }


// function createNewUsr(newACount): void {
//   try {
//     allAcounts.push(newAccount);
//     writeFileSync("./account.json", data)
//   } catch (error) {
//     console.log()
//   }
// }