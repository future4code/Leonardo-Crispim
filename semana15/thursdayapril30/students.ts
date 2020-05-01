export class Student {
    private id: string;
    private name: string;
    private email: string;
    private birthday: string;
    private hobbies: string;
  
    constructor(
          id: string,
          name: string,
          email: string,
          birthday: string,
          hobbies: string,
      ){
          this.id = id
          this.name = name 
          this.email = email
          this.birthday = birthday
          this.hobbies = hobbies
      }
  
  }

export const student0 = new Student("0", "Chase", "chasemail.com", "11/01/1980", "hitting on chicks")

export const student1 = new Student("1", "Cameron", "cameronmail.com", "22/03/1984", "curing the sick")

export const student2 = new Student("2", "Foreman", "foremanmail.com", "08/08/1977", "working")

export const student4 = new Student("3", "Masters", "mastersmail.com", "11/01/2005", "being annoying")

export const student5 = new Student("4", "Thirteen", "thirteenmail.com", "20/04/2001", "partying")

  