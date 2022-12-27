import cors from 'cors';
import express from 'express';
import { api } from './api';
import { connectDb, prisma } from './prismaClient';

const PORT = process.env.PORT || 8000;

const start = async () => {
	const app = express();

	app.use(
		cors<cors.CorsRequest>({
			origin: ['http://localhost:3000'],
		})
	);

	app.use(express.json());

	await connectDb();

	app.use('/api', api);

	app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};
start()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
