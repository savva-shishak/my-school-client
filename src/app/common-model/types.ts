export interface Model {
  id: number;
  name: string;
  [key: string]: any;
}

export type ModelAlias = 'groups' | 'teachers' | 'rooms' | 'subjects';

export interface ResponseModel<T> {
  _embedded: {
    [key: string]: T;
  };
}

