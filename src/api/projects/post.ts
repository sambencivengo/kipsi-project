import { Handler } from 'express';

export const post: Handler = async (req, res) => {
	res.send('Hello from projects post');
};
