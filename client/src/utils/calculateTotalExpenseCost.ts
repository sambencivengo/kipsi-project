import { Project } from '../types';

export const calculateTotalExpenseCost = (project: Project) =>
	project.expenses.length > 0
		? project.expenses
				.map(({ cost }) => Number(cost))
				.reduce((sum, a) => sum + a, 0)
		: 0;
