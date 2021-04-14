export interface GroupListItem {
    id: number;
    name: string;
}

export interface Subject {
    id: number;
    name: string;

    teacher: {
        id: number;
        name: string;
    };
}

export interface GroupFullInfo {
    id: number;
    name: string;
    subjects: Subject[];
}

export interface Lesson {
    subject: Subject;
    group: GroupListItem;
    room: {
        id: number;
        name: string;
    };
}
