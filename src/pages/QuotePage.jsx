import { Blockquote, Space, Title, Container } from "@mantine/core";
import { useState, useEffect } from "react";
import { animeAPI } from "../service/api";

const QuotePage = () => {
	const [quote, setQuote] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				const data = await (await animeAPI.get("random")).data;
				setQuote(data);
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}, []);

	return (
		<Container>
			<Title color="pink">Citação aleatória</Title>

			<Space h="sm" />

			<Blockquote cite={`${quote["character"]} - ${quote["anime"]}`}>
				{quote["quote"]}
			</Blockquote>
		</Container>
	);
};

export default QuotePage;
