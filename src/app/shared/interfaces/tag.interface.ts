export interface Tag {
  _id: string;
  tagName: string;
  posts: string[];
}

export type CreateTagDTO = Omit<Tag, 'posts' | '_id'>;
