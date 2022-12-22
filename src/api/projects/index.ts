import { Router } from 'express';
import { get } from './get';
import { post } from './post';
import { projectId } from './[projectId]';

export const projects = Router({ mergeParams: true });

projects.get('', get);
projects.post('', post);
projects.use('/:projectId', projectId);
