import { Space, Title, Container } from "@mantine/core";
import BlockQuote from "../components/BlockQuote";

const QuotePage = () => {
	return (
		<Container>
			<Title color="pink">Citação aleatória</Title>

			<Space h="sm" />

			<BlockQuote />
		</Container>
	);
};

export default QuotePage;
