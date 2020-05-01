export class Teacher {
    private id: string;
    private name: string;
    private email: string;
    private specialties: string;
  
    constructor(
          id: string,
          name: string,
          email: string,
          specialties: string
      ){
          this.id = id
          this.name = name 
          this.email = email
          this.specialties = specialties
      }
  
  }


export const prof0 = new Teacher("0", "House", "housemail.com", "Medicine and Sarcasm")

export const prof1 = new Teacher("1", "Wilson", "wilsonmail.com", "React and Javascript")

export const prof2 = new Teacher("2", "Cuddy", "cuddymail.com", "ADM and Logistics")

  