import { Router } from 'express';
import { get } from './get';
import { post } from './post';

export const expenses = Router();

expenses.get('', get);
expenses.post('', post);
