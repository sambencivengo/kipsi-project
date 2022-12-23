import {
	Box,
	Button,
	Flex,
	Heading,
	Spinner,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { InputField } from '../components/InputField';
import { colors } from '../theme';
import { CreateProjectSchema } from '../schema';
import { devBaseApiUrl } from '../constants';
import { ErrorAlert, ErrorAlertProps } from '../components/ErrorAlert';
import React from 'react';

const CreateProject: NextPage = () => {
	const [requestError, setRequestError] = React.useState<ErrorAlertProps>();
	const [isLoading, setIsLoading] = React.useState(false);

	const toast = useToast();

	if (isLoading) return <Spinner />;

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
					Create Project
				</Heading>
				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					initialValues={{ name: '', description: '' }}
					validationSchema={CreateProjectSchema.uiSchema}
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

						if (!res.ok) {
							const errCodeMsg = `(Error Code: ${res.status})`;
							setRequestError({
								header: 'Error',
								text: `Unable to get projects ${errCodeMsg}`,
							});
							setIsLoading(false);

							return;
						}

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
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Flex flexDirection={'column'} gap={4}>
								<InputField name="name" label="Project Name" />
								<InputField
									name="description"
									label="Description"
								/>
							</Flex>
							<Button
								isLoading={isSubmitting}
								mt={4}
								type="submit"
							>
								Create
							</Button>
						</Form>
					)}
				</Formik>
			</VStack>
		</Box>
	);
};

export default CreateProject;
