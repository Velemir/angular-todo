export class Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(title: string, userId: number) {
    this.title = title;
    this.userId = userId;
    this.completed = false;
    this.id = Math.floor(Math.random() * 10000);
  }

}
