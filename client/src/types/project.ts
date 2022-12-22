import { Expense } from './expense';

export interface Project {
	id: number;
	name: string;
	createdAt: Date;
	description: string;
	expenses: Expense[];
}
