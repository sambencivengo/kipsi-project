import { Handler } from 'express';
import { expenses } from '.';
import { prisma } from '../../prismaClient';
import { CreateExpenseSchema } from '../../schema';

export const post: Handler = async (req, res) => {
	try {
		const { body, query } = req;

		try {
			await CreateExpenseSchema.apiSchema.validate(body);
		} catch (error) {
			res.status(400).send(`Validation failed: ${error}`);
			return;
		}

		const { name, cost } = body;
		const { projectId } = query;

		const isQualified = Math.round(Math.random()); // Simulating determining whether the expense is qualified

		const project = await prisma.project.update({
			where: { id: Number(projectId) },
			data: {
				expenses: {
					create: {
						cost,
						name,
						is_qualified: !!isQualified,
					},
				},
			},
			include: {
				expenses: true,
			},
		});

		if (!project) {
			res.sendStatus(404);
			return;
		}

		res.send(project.expenses[project.expenses.length - 1]);
	} catch (error) {
		res.send(`Unable to create a new project: ${error}`);
	}
};
