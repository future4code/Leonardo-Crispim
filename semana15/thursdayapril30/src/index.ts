import { Teacher } from './Teacher'
import { Student } from './Student'
import { Mission } from './Mission'
import { NightMission } from './NightMission'
import { FileManager } from './FileManager'

//Students     ---------------------
export const student0 = new Student("0", "Chase", "chasemail.com", "11/01/1980", "hitting on chicks")

export const student1 = new Student("1", "Cameron", "cameronmail.com", "22/03/1984", "curing the sick")

export const student2 = new Student("2", "Foreman", "foremanmail.com", "08/08/1977", "working")

export const student4 = new Student("3", "Masters", "mastersmail.com", "11/01/2005", "being annoying")

export const student5 = new Student("4", "Thirteen", "thirteenmail.com", "20/04/2001", "partying")


//Teachers     ---------------------
export const prof0 = new Teacher("0", "House", "housemail.com", [])

export const prof1 = new Teacher("1", "Wilson", "wilsonmail.com", [])

export const prof2 = new Teacher("2", "Cuddy", "cuddymail.com", [])

export const prof3 = new Teacher("3", "Tidus", "tidusmail.com", [])


//Missions     ---------------------

const mission1 = new NightMission("001", "24/01/2001", "12/12/2001", 1, [], [])

//File Manager    ---------------------

const fmMission = new FileManager("missions.json");

// // imprime as infos do arquivo
const readMission = fmMission.readFile();

const fmStudent = new FileManager("students.json");

const readStudent = fmStudent.readFile();

const fmTeacher = new FileManager("teachers.json");

const readTeacher = fmTeacher.readFile();

const writeMission = fmMission.writeFile(mission1)