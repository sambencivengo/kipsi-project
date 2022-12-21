import express from 'express';

const PORT = process.env.PORT || 8000;

const start = async () => {
	const app = express();

	app.get('/', (_, res) => {
		res.send('Hello world');
	});

	app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};
start();
