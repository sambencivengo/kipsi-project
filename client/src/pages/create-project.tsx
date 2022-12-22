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
import { resolveMx } from 'dns';
import { ErrorAlert, ErrorAlertProps } from '../components/ErrorAlert';
import React from 'react';

const CreateProject: NextPage = () => {
	const [requestError, setRequestError] = React.useState<ErrorAlertProps>();
	const [isLoading, setIsLoading] = React.useState(false);

	const toast = useToast();

	if (isLoading) return <Spinner />;

	if (requestError) return <ErrorAlert {...requestError} />;

	return (
		<Box w={'100%'} p={10} borderRadius={10} bgColor={colors.darkBlue}>
			<Heading p={5}>Create Project</Heading>
			<VStack>
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
