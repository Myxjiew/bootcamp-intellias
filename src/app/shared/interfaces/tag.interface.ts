export interface Tag {
  _id: string;
  tagName: string;
}

export type CreateTagDTO = Omit<Tag, '_id'>;
