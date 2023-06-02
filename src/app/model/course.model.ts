export class CourseModel {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  duration: string;

  constructor(args?: any) {
    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.category = args.category;
      this.description = args.description;
      this.location = args.location;
      this.duration = args.duration;
    }
  }
}
