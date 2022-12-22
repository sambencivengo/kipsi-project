import { Handler } from 'express';
import { prisma } from '../../prismaClient';

export const get: Handler = async (req, res) => {
	console.log(req);

	const expense = await prisma.expense.findMany();

	res.send(expense);
};
