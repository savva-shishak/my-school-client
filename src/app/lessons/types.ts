export interface Model {
  id: number;
  name: string;
}

export interface Lesson {
  id: number;
  group: Model;
  subGroup: number;
  subject: Model & {teacher: Model};
  room: Model;
  week: number;
  dayWeek: number;
  pairNum: number;
}

export interface LessonDataCreate {
  group?: number;
  subgroup?: number;
  subject?: number;
  room?: number;
  week?: number;
  dayWeek?: number;
  pairNum?: number;
}

export const week: string[] = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

export type Entity = 'group' | 'teacher' | 'room';

