import {
	Box,
	useToast,
	Spinner,
	VStack,
	Heading,
	Flex,
	Button,
	HStack,
	Center,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react';
import { devBaseApiUrl } from '../constants';
import { CreateExpenseSchema, CreateProjectSchema } from '../schema';
import { colors } from '../theme';
import { ErrorAlertProps, ErrorAlert } from './ErrorAlert';
import { InputField } from './InputField';

interface ExpenseFormProps {
	setShowExpenseForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({
	setShowExpenseForm,
}) => {
	const [requestError, setRequestError] = React.useState<ErrorAlertProps>();
	const [isLoading, setIsLoading] = React.useState(false);

	const toast = useToast();

	if (isLoading)
		return (
			<Center p={10}>
				<Spinner />
			</Center>
		);

	if (requestError) return <ErrorAlert {...requestError} />;

	return (
		<Box
			w={['300px', '600px']}
			p={10}
			minH={'350px'}
			borderRadius={10}
			bgColor={colors.darkBlue}
		>
			<VStack align="stretch">
				<Heading textAlign="center" p={5}>
					New Expense
				</Heading>
				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					initialValues={{ name: '', cost: '' }}
					validationSchema={CreateExpenseSchema.uiSchema}
					onSubmit={async (args) => {
						setIsLoading(true);

						const res = await fetch(
							`${devBaseApiUrl}/api/projects`,
							{
								method: 'POST',
								headers: {
									'content-type': 'application/json',
								},
								body: JSON.stringify(args),
							}
						);

						await res.json();
						setIsLoading(false);

						toast({
							description: 'New Project Created!',
							status: 'success',
							variant: 'solid',
							duration: 4000,
							isClosable: true,
							containerStyle: { background: colors.orange },
							position: 'top',
						});

						if (!res.ok) {
							const errCodeMsg = `(Error Code: ${res.status})`;
							setRequestError({
								header: 'Error',
								text: `Unable to get projects ${errCodeMsg}`,
							});
							setIsLoading(false);

							return;
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Flex flexDirection={'column'} gap={4}>
								<InputField name="name" label="Expense Name" />
								<InputField name="cost" label="Expense Cost" />
							</Flex>
							<Flex justifyContent="space-around" mt={3}>
								<Button isLoading={isSubmitting} type="submit">
									Create
								</Button>
								<Button
									bgColor={colors.red}
									onClick={() => setShowExpenseForm(false)}
								>
									Cancel
								</Button>
							</Flex>
						</Form>
					)}
				</Formik>
			</VStack>
		</Box>
	);
};
