import { User } from './user'
import { Employee } from './employee'

export class Seller extends Employee {
    protected salesQuantity: number = 0

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number,
        salesQuantity: number = 0
      ) {
        super(id, email, name, password, admissionDate, baseSalary);
        console.log("Chamando o construtor da classe User")
        this.salesQuantity = salesQuantity
      }

      public setSalesQuantity(sales: number){
        this.salesQuantity = sales
      }
  }