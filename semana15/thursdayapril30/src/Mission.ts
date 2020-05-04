export abstract class Mission {
    public name: string;

    constructor(
        public id: string,
        public startdate: string,
        public enddate: string,
        public currentmodule: number,
        public missionstaff: [],
        public missionstudents: []
      ){
      }
      
      public setName(name: string) {
        this.name = name;
      }
  }

  