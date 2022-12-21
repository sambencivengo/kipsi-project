import { Router } from 'express';
import { get } from './get';
import { post } from './post';

export const projects = Router();

projects.get('', get);
projects.post('', post);
