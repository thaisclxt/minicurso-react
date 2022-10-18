import { Alert, Text, Container } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<Container>
			<Alert icon={<IconAlertCircle size={16} />} title="Ooops!" color="red">
				<Text italic>Página não encontrada.</Text>
				<Text variant="link" component={Link} to="/">
					Voltar para página incial.
				</Text>
			</Alert>
		</Container>
	);
};

export default ErrorPage;
