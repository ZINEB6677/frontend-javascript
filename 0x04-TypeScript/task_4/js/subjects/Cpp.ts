import { Teacher } from './Teacher.js'
import Subject, { cpp } from './Subject.js';
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?:number;
    }
}
 class Cpp extends Subject{
    getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
    }   
    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return 'Available Teacher: ${this.teacher.firstName}';
        } else {
        return 'No available teacher';
        }
    }}


console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());