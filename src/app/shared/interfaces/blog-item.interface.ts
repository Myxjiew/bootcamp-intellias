export interface IPost {
  _id: string;
  firstName?: string;
  lastName?: string;
  date: Date;
  title: string;
  content: string;
  toggle: boolean;
  likes: number;
}
