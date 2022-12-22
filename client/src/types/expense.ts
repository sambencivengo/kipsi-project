import { Project } from './project';

export interface Expense {
	id: number;
	cost: string;
	name: string;
	createdAt: Date;
	is_qualified: boolean;
	projectId: number;
	project: Project;
}
