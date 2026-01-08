import Subject from './Subject.js';
import type { Teacher } from './Teacher.js';


namespace Subjects {
    export class React extends Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            super();
            this.teacher = teacher;
        }

        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
        }
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}