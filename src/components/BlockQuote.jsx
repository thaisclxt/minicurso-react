import { Blockquote } from "@mantine/core";
import { useState, useEffect } from "react";
import { animeAPI } from "../service/api";

const BlockQuote = () => {
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
		<Blockquote cite={`${quote["character"]} - ${quote["anime"]}`}>
			{quote["quote"]}
		</Blockquote>
	);
};

export default BlockQuote;
