import { Router } from 'express';
import { get } from './get';

export const projectId = Router({ mergeParams: true });

projectId.get('', get);
