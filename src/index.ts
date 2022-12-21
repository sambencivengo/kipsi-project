import express from 'express';
import { api } from './api';

const PORT = process.env.PORT || 8000;

const start = async () => {
	const app = express();

	app.use('/api', api);

	app.get('/', (_, res) => {
		res.send('Hello world');
	});

	app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};
start();
