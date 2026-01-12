import { cTeacher } from '../main.js';
import Subject, { java } from './Subject.js';

namespace Subjects {   
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    // Java class
    export class Java extends Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            super();
            this.teacher = teacher;
        }

        // Method 1: getRequirements
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        // Method 2: getAvailableTeacher
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}


console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());