export interface Post {
  _id: string;
  author: {
    firstName: string;
    lastName: string;
  };
  date: Date;
  title: string;
  content: string;
  toggle: boolean;
  likes: number;
  tags: [
    {
      tagName: string;
    }
  ];
}
