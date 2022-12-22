import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextPage } from 'next';
import { InputField } from '../components/InputField';
import { colors } from '../theme';
import { CreateProjectSchema } from '../schema';

const CreateProject: NextPage = () => {
	return (
		<Box p={10} borderRadius={10} bgColor={colors.darkBlue}>
			<Heading>Create Project</Heading>
			<VStack>
				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					initialValues={{ name: '', description: '' }}
					validationSchema={CreateProjectSchema.uiSchema}
					onSubmit={async (args) => {
						console.log(args);
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
