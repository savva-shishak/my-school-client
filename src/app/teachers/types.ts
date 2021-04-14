import { Model } from "../lessons/types";

export interface SubjectWithGroups extends Model {
    groups: Model[];
}
