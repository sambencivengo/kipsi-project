import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';
import { colors } from '../theme';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	label?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
	label,
	size: _,
	...props
}) => {
	const [field, { error }] = useField(props);
	return (
		<FormControl isInvalid={!!error}>
			{label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
			<Input {...field} {...props} id={field.name} />
			{error && (
				<FormErrorMessage color={colors.red}>{error}</FormErrorMessage>
			)}
		</FormControl>
	);
};
