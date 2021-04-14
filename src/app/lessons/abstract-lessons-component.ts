import { ApiLessonsService } from './api-lessons.service';
import { week, LessonDataCreate, Lesson, Entity } from './types';

export abstract class AbstractLessonsComponent {
    displayedColumns: string[] = ['group', 'teacher', 'room', 'subject'];

    abstract entityId: number;

    lessons: Lesson[] = [];
    week = week;

    loading = true;

    lesson: LessonDataCreate = {subgroup: 0, week: 0};
    cross: Lesson[] = [];

    addingLoading = false;

    constructor(
        private lessonsService: ApiLessonsService,
        private entity: Entity
    ) {}

    async load(): Promise<any> {
        const res = await this.lessonsService.getAll(this.entity, this.entityId).toPromise();
        return (this.lessons = res);
    }

    async add(): Promise<void> {
        this.addingLoading = true;

        this.cross = await this.lessonsService.getCross(this.lesson).toPromise();

        if (this.cross.length === 0) {
            await this.lessonsService.add(this.lesson).toPromise();
            await this.load();
        }

        this.addingLoading = false;
    }

    selectLesson({dayWeek, pairNum}: { dayWeek: number, pairNum: number }): void {
        this.lesson.dayWeek = dayWeek;
        this.lesson.pairNum = pairNum;
    }

    deleteLesson(id: number): void {
        this.loading = true;
        this.lessonsService.removeLesson(id).subscribe(() => {
            this.lessons = this.lessons.filter(lesson => lesson.id !== id);
            this.loading = false;
        });
    }
}
