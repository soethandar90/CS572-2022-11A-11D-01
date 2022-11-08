import { DE_Student } from "./DE_Student.js";
import {Student} from "./Student.js";
let jack:DE_Student=new Student(123, "Jack", 3.0);
//let jack=new Student(123, "Jack", 3.0); //that works

console.log(jack.id);
console.log(jack.getName());
console.log(jack.gpa);

console.log(jack['course']);