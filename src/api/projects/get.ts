import { Handler } from 'express';
import { prisma } from '../../prismaClient';

export const get: Handler = async (req, res) => {
	const projects = await prisma.project.findMany({
		include: {
			expenses: true,
		},
	});

	res.send(projects);
};
