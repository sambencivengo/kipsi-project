import { Handler } from 'express';
import { prisma } from '../../prismaClient';
import { CreateProjectSchema } from '../../schema';

export const post: Handler = async (req, res) => {
	try {
		const { body } = req;
		try {
			await CreateProjectSchema.apiSchema.validate(body);
		} catch (error) {
			res.status(400).send(`Validation failed: ${error}`);
			return;
		}

		const { name, description } = body;

		const newPoject = await prisma.project.create({
			data: {
				name,
				description,
			},
		});

		res.send(newPoject);
	} catch (error) {
		res.send(`Unable to create a new project: ${error}`);
	}
};
