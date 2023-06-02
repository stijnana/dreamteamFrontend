import {CourseModel} from "./course.model";

export class LearningRouteModel {
  id: number;
  name: string;
  description: string;
  length: number;
  courses_id: number[];
  courses: CourseModel[];

  constructor(args?: any) {
    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.description = args.description;
      this.length = args.length;
      this.courses_id = args.courses_id;
    }
  }
}
