import { Router } from 'express';
import { expenses } from './expenses';
import { projects } from './projects';

export const api = Router();

api.use('/expenses', expenses);
api.use('/projects', projects);
