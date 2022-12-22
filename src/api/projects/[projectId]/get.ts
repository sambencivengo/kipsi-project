import { Handler } from 'express';
import { prisma } from '../../../prismaClient';

export const get: Handler = async (req, res) => {
	try {
		const { projectId } = req.params;

		const project = await prisma.project.findUnique({
			where: { id: Number(projectId) },
			include: {
				expenses: true,
			},
		});

		if (!project) {
			res.sendStatus(404);
			return;
		}

		res.send(project);
	} catch (error) {
		res.status(500).send(`Unable to get project: ${error}`);
	}
};
