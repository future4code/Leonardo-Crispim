export class Group {
    private id: string;
    private name: string;
    private startdate: string;
    private enddate: string;
    private currentmodule: number;
    private grouptype: string;
    private groupstaff: [];
  
    constructor(
          id: string,
          name: string,
          startdate: string,
          enddate: string,
          currentmodule: number,
          grouptype: string,
          groupstaff: [],
      ){
          this.id = id
          this.name = name 
          this.startdate = startdate
          this.enddate = enddate
          this.currentmodule = currentmodule
          this.grouptype = grouptype
          this.groupstaff = groupstaff
      }
  
  }

  