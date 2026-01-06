namespace Subjects {
    // إضافة experienceTeachingJava إلى Teacher interface
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    // Java class
    export class Java {
        teacher: Teacher;

        constructor(teacher: Teacher) {
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