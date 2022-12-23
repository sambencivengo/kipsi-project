import * as yup from 'yup';

const schema = yup.object({
	cost: yup.number().required('A cost is required'),
	name: yup
		.string()
		.trim()
		.required('An expense name is required')
		.max(255, 'Expense name must be under 255 characters'),
});

export type ApiValues = yup.InferType<typeof apiSchema>;
export const apiSchema = schema.clone();
