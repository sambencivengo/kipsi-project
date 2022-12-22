import { Handler } from 'express';
import { prisma } from '../../prismaClient';

export const get: Handler = async (req, res) => {
	try {
		const expenses = await prisma.expense.findMany({
			include: {
				project: true,
			},
		});

		if (!expenses) {
			res.sendStatus(404);
			return;
		}
		res.send(expenses);
	} catch (error) {
		res.status(500).send(`Unable to get expenses: ${error}`);
	}
};
