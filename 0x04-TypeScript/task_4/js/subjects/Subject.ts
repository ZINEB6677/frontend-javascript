import  Teacher  from './Teacher.js';

namespace Subjects {
    export class Subject {
        teacher: Teacher;
        getTeacher(): Teacher {
            return this.teacher;
        }
        setTeacher(teacher:Teacher): void {
            this.teacher = teacher;
        }
    }
}
