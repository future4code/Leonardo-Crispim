enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
  }

export class Teacher {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public specialties: TEACHER_SPECIALTY[],
      ){

      }
  }


  