import { stringify } from "querystring";

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

const client: Client = { 
    name: "clientname",
    registrationNumber: 15,
    consumedEnergy: 10,
    calculateBill(): number {
        return 3
    }
}

// console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())

// RESPOSTAS
// 1)   A - Todas as propriedades foram impressas pois nenhuma delas era private.

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   const place = new Place("13234412")

  //RESPOSTAS
  // 2) A - "Nao e possivel criar uma instancia de uma classe abstrata"
  //    B - "Criar uma subclasse que a extende e instanciar a subclasse"

  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
  }

  const residence = new Residence(3, "123")
  const commerce = new Commerce(2, "321")
  const industry = new Industry(1, "213")

//   console.log(residence.getCep())
//   console.log(commerce.getCep())
//   console.log(industry.getCep())

  export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string,
        private cpf: string
    ){
        super(residentsQuantity, cep)
    }

      getCPF(): string{
          return this.cpf
      }

      calculateBill(): number {
          return (this.consumedEnergy * 0.75)
      }
  }

  //RESPOSTAS
  // 4  - A) getCPF e calculateBill, a classe possui name, registrationNumber,
  //        consumedEnergy, residentsQuantity, cep e CPF, pois herdou as propriedades da interface
  //        e da classe pai

  export class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        private cnpj: string,
        cep: string,
        private cpf: string
    ){
        super(floorsQuantity, cep)
    }

    getCNPJ(): string{
        return this.cnpj
    }

      calculateBill(): number {
          return (this.consumedEnergy * 0.53)
      }
  }

  //RESPOSTAS
  //5 - A) Elas possuem as mesmas herancas da classe pai
  //    B) Ambas tem suas proprias propriedades nao encontradas em outras classes (cep/cnpj)

  export class IndustralClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        machinesQuantity: number,
        cep: string,
        private industrialRegister: string
    ){
        super(machinesQuantity, cep)
    }

    getIndustrialRegister(): string {
        return this.industrialRegister
    }

      calculateBill(): number {
          return (this.consumedEnergy * 0.53)
      }
  }

  //RESPOSTAS
  //6 - A) Industry, para ter acesso a suas propriedades.
  //  - B) Client, para ter acesso as propriedades do cliente.
  //  - C) Por que o exercicio nao pediu

  export class ClientManager {
    private clients: Client[]

    getClientsQuantity(): number {
        return this.clients.length
    }

    registerClient(client: Client): void {
        this.clients.push(client)
    }
  }

