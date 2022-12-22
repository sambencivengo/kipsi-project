import * as yup from 'yup';

const schema = yup.object({
	name: yup
		.string()
		.trim()
		.required('A project name is required')
		.max(255, 'Project name must be under 255 characters'),
	description: yup
		.string()
		.trim()
		.required('A project description is required')
		.max(255, 'Project description must be under 255 characters'),
});

export type UiValues = yup.InferType<typeof uiSchema>;
export const uiSchema = schema.clone();
