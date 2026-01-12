

import { Teacher } from './Teacher.js';

export namespace Subjects {
    export class Subject {
        teacher?: Teacher;

        constructor(teacher?: Teacher) {
            this.teacher = teacher;
        }

        getTeacher(): Teacher | undefined {
            return this.teacher;
        }

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}

// Create and export constants
export const cpp = new Subjects.Subject();
export const java = new Subjects.Subject();
export const react = new Subjects.Subject();