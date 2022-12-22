import { Handler } from 'express';
import { prisma } from '../../prismaClient';

export const get: Handler = async (_, res) => {
	try {
		const projects = await prisma.project.findMany({
			include: {
				expenses: true,
			},
		});

		if (!projects) {
			res.sendStatus(404);
			return;
		}
		res.send(projects);
	} catch (error) {
		res.status(500).send(`Unable to get projects: ${error}`);
	}
};
