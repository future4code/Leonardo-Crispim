import { User } from './user'
import { Customer } from './customer'
import { Employee } from './employee'
import { Seller } from './seller'

// EXERCICIO 1
export const id: string = "12354687"
export const email: string = "emailteste@gmail.com"
export const name: string = "usuarioteste"
export const password: string = "senhateste"

const user = new User("12354687", "emailteste@gmail.com", "usuarioteste", "senhateste")

// console.log(user.getName())
// console.log(user.getEmail())
// console.log(user.getId())

// EXERCICIO 2
const customer = new Customer("123456", "customeremail@gmail.com", "customername", "customerpassword", "123-7")

// console.log(customer)

// EXERCICIO 3

// console.log(customer)

// EXERCICIO 4 e 5

// console.log(customer.introduceYourself())

// EXERCICIO 6

const employee = new Employee("1234", "employeemail@gmail.com", "employeename", "employeepasword", "14/01/2018", 2000)

// EXERCICIO 7

// console.log(employee.calculateTotalSalary())

//EXERCICIO 8

const seller = new Seller("9999", "selleremail", "sellername", "sellerpassword", "21/01/2010", 3000)

console.log(seller.setSalesQuantity(10))