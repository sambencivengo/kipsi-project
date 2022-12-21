import { Handler } from 'express';
import { prisma } from '../../prismaClient';

export const get: Handler = async (req, res) => {
	const expense = await prisma.expense.findMany();

	res.send(expense);
};
