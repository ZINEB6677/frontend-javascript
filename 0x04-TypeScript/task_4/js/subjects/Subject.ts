/// <reference path="Teacher.ts" />
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
